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
		"content": `<style>.qmu9zuolp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V8a5 5 0 0 1 10 0v13.5ZM8 3v18.5m10.75-7V21m2.815-4.875l-5.63 3.25m5.63 0l-5.63-3.25");
}
</style><path class="qmu9zuolp"/>`,
		"fallback": "uix:cryotherapy",
	});
}

export default Component;
