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
		"content": `<style>.zz69-hbxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 21 -9 -9h5V3h8v9h5Z");
}
</style><path class="zz69-hbxk"/>`,
		"fallback": "iconmind:arrow-big-down-outline-thin",
	});
}

export default Component;
