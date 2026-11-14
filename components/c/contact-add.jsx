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
		"content": `<style>.ra2a6dfpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3h7A3.5 3.5 0 0 1 19 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 17.5v-11A3.5 3.5 0 0 1 8.5 3m-5 5h3m-3 4h3m-3 4h3M12 8.5v7M8.5 12h7");
}
</style><path class="ra2a6dfpo"/>`,
		"fallback": "uix:contact-add",
	});
}

export default Component;
