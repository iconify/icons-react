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
		"content": `<style>.u503svoyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.462 21.5H3.5v-9c0-2 3-3 3-5v-2h3v2c0 2 3 3 3 5v2.838M7 2.5h2A1.5 1.5 0 0 1 10.5 4A1.5 1.5 0 0 1 9 5.5H7A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 2.5m-1 13h4m8-2c.5 1.75 3.5 2.75 3.5 5a3.5 3.5 0 0 1-7 0c0-1.5.75-2.5 1.75-3.25c0 1 .5 1.75 1 2q0-2.25.75-3.75");
}
</style><path class="u503svoyz"/>`,
		"fallback": "uix:bbq-sauce",
	});
}

export default Component;
