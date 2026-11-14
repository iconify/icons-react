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
		"content": `<style>.f6-k0ki0a {
  d: path("M8.75 17.75a3.25 1.5 0 1 0 6.5 0a3.25 1.5 0 1 0-6.5 0");
}

.g8np3ob1n {
  d: path("M12 6c3.5 0 5 1 5 3.25c0 1.75-2 2.25-2 4c0 1.5 3.5 1.75 3.5 4.75c0 2.5-3 3.5-6.5 3.5s-6.5-1-6.5-3.5c0-3 3.5-3.25 3.5-4.75c0-1.75-2-2.25-2-4C7 7 8.5 6 12 6m0-3.5V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g8np3ob1n"/><path class="f6-k0ki0a"/></g>`,
		"fallback": "uix:chin-rest",
	});
}

export default Component;
