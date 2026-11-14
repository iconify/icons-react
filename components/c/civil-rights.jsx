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
		"content": `<style>.etat_gbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3.5 21.5V20c0-3.25 3-5.5 7.5-5.5c1.055 0 1.932.107 2.781.35M15.5 17h6m-6 3.5h6");
}
</style><path class="etat_gbvw"/>`,
		"fallback": "uix:civil-rights",
	});
}

export default Component;
