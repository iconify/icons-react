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
		"content": `<style>.w6sjs3r2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m-2.5-14H3m2.75-2.75L3 7.5l2.75 2.75m8.75 6.25H21m-2.75-2.75L21 16.5l-2.75 2.75");
}
</style><path class="w6sjs3r2o"/>`,
		"fallback": "uix:compare",
	});
}

export default Component;
