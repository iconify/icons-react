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
		"content": `<style>.uhpgp_nev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-2.5A3.5 3.5 0 0 1 6 12m4 0V2.5h9.5V12M5.25 5zA1.75 1.75 0 0 1 7 6.75v3.5A1.75 1.75 0 0 1 5.25 12a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 5.25 5m7.5 1h4m-4 3h2.75");
}
</style><path class="uhpgp_nev"/>`,
		"fallback": "uix:document-fax",
	});
}

export default Component;
