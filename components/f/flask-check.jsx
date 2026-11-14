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
		"content": `<style>.j5k1-5ffr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8m-6.5 0v6L3.75 20q-.5 1 .75 1h9.293m5.883-.005q.806-.054.706-.626m-2.611-5.326L14.5 8.5v-6M7.25 13h9.5m-2 5l2 2L21 15.75");
}
</style><path class="j5k1-5ffr"/>`,
		"fallback": "uix-sharp:flask-check",
	});
}

export default Component;
