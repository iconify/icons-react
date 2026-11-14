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
		"content": `<style>.dezw4qb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5V8a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0v6.5m-18 0q3 3.5 6 0q3 3.5 6 0q3 3.5 6 0V20H3ZM9 8v6.5M15 8v6.5");
}
</style><path class="dezw4qb1m"/>`,
		"fallback": "uix:gum",
	});
}

export default Component;
