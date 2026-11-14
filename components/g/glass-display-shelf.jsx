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
		"content": `<style>.otz1mobbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19m-18 0v5.5L7 14m13.5 0v5.5L17 14m-7.25 0C7 11.5 7.5 8 10 6.5v-2h4v2c2.5 1.5 3 5 .25 7.5");
}
</style><path class="otz1mobbq"/>`,
		"fallback": "uix:glass-display-shelf",
	});
}

export default Component;
