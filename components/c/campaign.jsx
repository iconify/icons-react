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
		"content": `<style>.rh_y_-boe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9h2.292a1.75 1.75 0 0 0 .858-.225l4.992-2.808A1.75 1.75 0 0 1 15.5 7.492v9.016a1.75 1.75 0 0 1-2.608 1.525L7.9 15.225A1.75 1.75 0 0 0 7.042 15H4.75A1.75 1.75 0 0 1 3 13.25v-2.5A1.75 1.75 0 0 1 4.75 9m2.75 6l1.25 5M18.5 9.5L21 8m-2.5 6.5L21 16");
}
</style><path class="rh_y_-boe"/>`,
		"fallback": "uix:campaign",
	});
}

export default Component;
