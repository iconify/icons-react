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

.isvgtub8p {
  d: path("M4 4v10h16");
}

.xpi-ctm3k {
  d: path("m15 9 5 5 -5 5");
}
</style><g class="hntgybcog"><path class="isvgtub8p"/><path class="xpi-ctm3k"/></g>`,
		"fallback": "iconmind:corner-down-right-outline-thin",
	});
}

export default Component;
