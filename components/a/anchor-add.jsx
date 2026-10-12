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
		"content": `<style>.dd2fi97pf {
  d: path("M3 20.75L10.25 11m4.25-2.5h6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ws4hpbvoz {
  width: 5px;
  height: 5px;
  x: 9.5px;
  y: 6px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="dd2fi97pf"/><rect class="ws4hpbvoz"/></g>`,
		"fallback": "iconoven:anchor-add",
	});
}

export default Component;
