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
		"content": `<style>.p7zg_94vd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 15h11A1.75 1.75 0 0 1 17 16.75a1.75 1.75 0 0 1-1.75 1.75h-11a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 15M12 15l5-10.75M14.75 3l4.5 2.5M2.5 21.5h19");
}
</style><path class="p7zg_94vd"/>`,
		"fallback": "uix:carpet-cleaner",
	});
}

export default Component;
