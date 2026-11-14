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
		"content": `<style>.huj_3-blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9.5h4V12h2a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h2Zm1 0l-5-6m7 6l5-6m-6 3c-1.25-1 1.25-2.5 0-3.5");
}
</style><path class="huj_3-blw"/>`,
		"fallback": "uix:aroma-diffuser",
	});
}

export default Component;
