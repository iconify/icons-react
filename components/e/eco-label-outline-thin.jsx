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
		"content": `<style>.egda5-rke {
  d: path("M10.5 13.5c0 -4.2 2.8 -7 7 -7 0 4.2 -2.8 7 -7 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}
</style><g class="hntgybcog"><path class="pywr_yykw"/><path class="egda5-rke"/></g>`,
		"fallback": "iconmind:eco-label-outline-thin",
	});
}

export default Component;
