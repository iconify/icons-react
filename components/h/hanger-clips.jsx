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
		"content": `<style>.p77qexb5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7V6a2 2 0 1 0-2-2M3.75 7h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75A1.25 1.25 0 0 1 2.5 8.25A1.25 1.25 0 0 1 3.75 7M6 9.5V12m-.5 0h1A1.5 1.5 0 0 1 8 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 4 18v-4.5A1.5 1.5 0 0 1 5.5 12M18 9.5V12m-.5 0h1a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 16 18v-4.5a1.5 1.5 0 0 1 1.5-1.5M4 15.5h4m8 0h4");
}
</style><path class="p77qexb5g"/>`,
		"fallback": "uix:hanger-clips",
	});
}

export default Component;
