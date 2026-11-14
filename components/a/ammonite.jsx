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
		"content": `<style>.i1vsrd5on {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 13a9 9 0 0 0-18 0a7 7 0 0 0 14 0a5 5 0 0 0-10 0a3 3 0 0 0 6 0m-1-9v4m-2 8v4m7-7h4");
}
</style><path class="i1vsrd5on"/>`,
		"fallback": "uix:ammonite",
	});
}

export default Component;
