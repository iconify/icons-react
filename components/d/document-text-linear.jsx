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
		"content": `<style>.bet-qjsfp {
  d: path("M11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhx-r4bhy {
  d: path("M8 8H16");
}

.sgjshnbod {
  d: path("M8 16H13");
}

.xn4zvpbmt {
  d: path("M8 12H16");
}
</style><g class="ipq1z-bjh"><path class="bet-qjsfp"/><path class="xn4zvpbmt"/><path class="lhx-r4bhy"/><path class="sgjshnbod"/></g>`,
		"fallback": "solar:document-text-linear",
	});
}

export default Component;
