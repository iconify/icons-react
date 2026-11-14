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
		"content": `<style>.dimqiabmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.8 21.5H4.5v-19h15v8.9m-11-8.9v19m3-14.5h4M15 21.25l3-6.5l3 6.5m-4.75-2.5h3.5");
}
</style><path class="dimqiabmr"/>`,
		"fallback": "uix-sharp:account-name",
	});
}

export default Component;
