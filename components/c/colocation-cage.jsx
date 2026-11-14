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
		"content": `<style>.bl19-_ktr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-19 18h19M5 3v18M19 3v18M10.75 6.5h2.5A1.75 1.75 0 0 1 15 8.25v7.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 15.75v-7.5a1.75 1.75 0 0 1 1.75-1.75M9 10.25h6m-6 3.5h6");
}
</style><path class="bl19-_ktr"/>`,
		"fallback": "uix:colocation-cage",
	});
}

export default Component;
