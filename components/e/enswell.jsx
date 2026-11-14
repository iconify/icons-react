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
		"content": `<style>.lc375nbzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14l1.5 4v11a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V7ZM3.5 7h17M12 10v8.5M8.25 12l7.5 4.5m-7.5 0l7.5-4.5");
}
</style><path class="lc375nbzk"/>`,
		"fallback": "uix:enswell",
	});
}

export default Component;
