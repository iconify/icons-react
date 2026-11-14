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
		"content": `<style>.b4magua-x {
  d: path("M2.5 15.5v-6a2 2 0 0 1 2-2h10.75c.75 0 1.25.25 1.75 1l3.75 3.5c.5.5.75 1 .75 1.75v1.75A1.5 1.5 0 0 1 20 17H4a1.5 1.5 0 0 1-1.5-1.5Zm2-8l1.25-4H13l1.25 4");
}

.u7h7lpdvl {
  d: path("M13 7.5V12h7M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b4magua-x"/><path class="u7h7lpdvl"/></g>`,
		"fallback": "uix-sharp:camper-van",
	});
}

export default Component;
