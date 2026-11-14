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
		"content": `<style>.if9y9xgiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-5 0h2.25a7.25 7.25 0 0 0 4.5 6.75m5.5 0A7.25 7.25 0 0 0 19.25 8h2.25M12 12.5V21");
}
</style><path class="if9y9xgiz"/>`,
		"fallback": "uix:ball-joint",
	});
}

export default Component;
