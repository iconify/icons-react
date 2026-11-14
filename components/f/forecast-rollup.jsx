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
		"content": `<style>.q_hn3vyeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5h9.9m-6.4-3V13m3 4.5v-8m3 8V6m8.5 9H16l3 3.25l-3 3.25h5.5");
}
</style><path class="q_hn3vyeq"/>`,
		"fallback": "uix:forecast-rollup",
	});
}

export default Component;
