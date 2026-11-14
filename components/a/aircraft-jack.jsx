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
		"content": `<style>.o5-6w1bot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 21.5l5.5-6h6l5.5 6M12 6za1.75 1.75 0 0 1 1.75 1.75v6A1.75 1.75 0 0 1 12 15.5a1.75 1.75 0 0 1-1.75-1.75v-6A1.75 1.75 0 0 1 12 6m0-2.5V6M7.5 3.5h9");
}
</style><path class="o5-6w1bot"/>`,
		"fallback": "uix:aircraft-jack",
	});
}

export default Component;
