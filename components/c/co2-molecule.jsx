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
		"content": `<style>.wu-tjqb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 12A2.25 2.25 0 1 0 7 12a2.25 2.25 0 1 0-4.5 0ZM17 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM7 12h1.75m6.5 0H17");
}
</style><path class="wu-tjqb5n"/>`,
		"fallback": "uix-sharp:co2-molecule",
	});
}

export default Component;
