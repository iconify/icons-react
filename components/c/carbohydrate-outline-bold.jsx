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
		"content": `<style>.ltsx2_baf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M5 20v-9a4 4 0 0 1 4 -4h6a4 4 0 0 1 4 4v9Z");
}
</style><path class="ltsx2_baf"/>`,
		"fallback": "iconmind:carbohydrate-outline-bold",
	});
}

export default Component;
