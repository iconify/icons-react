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
		"content": `<style>.mp0616b-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.683 15.5H4.5v-13h7v7l4 1.75q.182.091.345.187M11.5 19.5h-8v-4h8.2m6.55-1.5a3.75 3.75 0 1 0 3 5.25a3.1 3.1 0 0 1-3-5.25Z");
}
</style><path class="mp0616b-x"/>`,
		"fallback": "uix-sharp:astronaut-boot",
	});
}

export default Component;
