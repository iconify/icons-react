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
		"content": `<style>.phm4pgb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 2l19 5.5M2.5 21h19m-16 0v-6.5a6.5 6.5 0 0 1 13 0V21m-10 0l2.25-5m4.75 5l-2.25-5");
}
</style><path class="phm4pgb2x"/>`,
		"fallback": "uix-sharp:adit",
	});
}

export default Component;
