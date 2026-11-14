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
		"content": `<style>.axhbnpuwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.232 21.496A6 6 0 0 1 12 21.5c-3.75 0-7-3-7-7c0-3 1.5-5 3-6.5c.25 2 1.25 3.25 2.5 3.75c-.25-3.5.25-6.75 1.5-9.25c2.92 2.503 5.84 5.702 6.728 9.596m1.674 3.252za1.75 1.75 0 0 1 0 2.475l-2.829 2.829a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l2.829-2.829a1.75 1.75 0 0 1 2.475 0m-3.889 1.415l2.474 2.474");
}
</style><path class="axhbnpuwj"/>`,
		"fallback": "uix:anti-inflammatory",
	});
}

export default Component;
