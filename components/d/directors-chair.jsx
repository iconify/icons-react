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
		"content": `<style>.tpbymbcnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12V3h14v9M5 7h14M3 12h18M5 12l14 9.5m0-9.5L5 21.5");
}
</style><path class="tpbymbcnf"/>`,
		"fallback": "uix:directors-chair",
	});
}

export default Component;
