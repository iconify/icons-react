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
		"content": `<style>.evzl16s1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19m19-19v19M9 5.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1.25 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-3.75 9c0-3 2-5 5.5-5s5.5 2 5.5 5M7.25 18.75L9 6.5m7.75 12.25L15 6.5");
}
</style><path class="evzl16s1v"/>`,
		"fallback": "uix:goalkeeper-save",
	});
}

export default Component;
