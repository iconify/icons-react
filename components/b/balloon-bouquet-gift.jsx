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
		"content": `<style>.gpdr4m3uh {
  d: path("M6.5 14.5h11v7h-11Zm-2.75-8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6-2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6 2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.u70g162xj {
  d: path("m6 8.75l6 5.75l6-5.75m-6-2V21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gpdr4m3uh"/><path class="u70g162xj"/></g>`,
		"fallback": "uix-sharp:balloon-bouquet-gift",
	});
}

export default Component;
