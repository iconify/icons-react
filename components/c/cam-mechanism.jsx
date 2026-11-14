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
		"content": `<style>.gp904e3zg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 15c0 2.5-5 5.5-9.5 5.5c-3.5 0-5.5-2.5-5.5-5.5s2-5.5 5.5-5.5c4.5 0 9.5 3 9.5 5.5M10 2.5v7m-2.25 0h4.5M10 15h.01");
}
</style><path class="gp904e3zg"/>`,
		"fallback": "uix:cam-mechanism",
	});
}

export default Component;
