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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jz9wy2bsc {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}

.lsab-4but {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M12 9.75v4m-2-2h4M10 17h4");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="lsab-4but"/></g>`,
		"fallback": "iconoven:file-diff",
	});
}

export default Component;
