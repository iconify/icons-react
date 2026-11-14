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
		"content": `<style>.v7k5c-bsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h2l3 4.5h10c1.75 0 3 .75 3 1.75s-1.25 1.75-3 1.75H6Zm10 8l-3.5 4m-7.5 3h19");
}
</style><path class="v7k5c-bsw"/>`,
		"fallback": "uix:genre-flight-sim",
	});
}

export default Component;
