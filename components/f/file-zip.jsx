import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hd32d7bne {
  d: path("M12 14.25v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jz9wy2bsc {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}

.ow9ixg9ca {
  width: 3px;
  height: 4.5px;
  x: 10.5px;
  y: 12.5px;
  rx: 1px;
}

.v4uxgbxyf {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M11 4.75h1m1 1.5h-1m-1 1.5h1m1 1.5h-1m-1 1.5h1");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="v4uxgbxyf"/><rect class="ow9ixg9ca"/><path class="hd32d7bne"/></g>`,
		"fallback": "iconoven:file-zip",
	});
}

export default Component;
