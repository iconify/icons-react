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
		"content": `<style>.jipcedbja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5.5h13l-3 5.5h-7ZM7.625 11h8.75A2.625 2.625 0 0 1 19 13.625v5.25a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 18.875v-5.25A2.625 2.625 0 0 1 7.625 11M12 5.5v-3h5M9.5 16.25h5");
}
</style><path class="jipcedbja"/>`,
		"fallback": "uix:coffee-grinder",
	});
}

export default Component;
