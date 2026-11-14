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
		"content": `<style>.pzc_pvbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7v1.1m0 7.8V17m-5-5h1.1m7.8 0H17m-5-9.5A2.25 2.25 0 1 1 12 7a2.25 2.25 0 1 1 0-4.5M12 17a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5M4.75 9.75a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5m14.5 0a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5M3.5 3.5l17 17");
}
</style><path class="pzc_pvbkf"/>`,
		"fallback": "uix:counter-drone",
	});
}

export default Component;
