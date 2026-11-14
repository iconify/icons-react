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
		"content": `<style>.cutacbclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5C3 5 21 5 21 9.5Zm0 5h18c0 4-18 4-18 0m2-5q-2.5 2.5 0 5m14-5q2.5 2.5 0 5");
}
</style><path class="cutacbclo"/>`,
		"fallback": "uix:alfajores",
	});
}

export default Component;
