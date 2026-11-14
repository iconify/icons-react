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
		"content": `<style>.wprpkcche {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM2.5 21.5c0-4 3-7.5 7-7.5s7 3.5 7 7.5M14 14.25l1 .5l7-11l-3-1.5Z");
}
</style><path class="wprpkcche"/>`,
		"fallback": "uix-sharp:baseball-batter",
	});
}

export default Component;
