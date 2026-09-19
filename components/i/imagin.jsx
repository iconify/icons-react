import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l-z6nphmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.29 32.92a4.79 4.79 0 1 0 4.79 4.79v-18.5c0-7.572 6.139-13.71 13.71-13.71S42.5 11.638 42.5 19.21s-6.138 13.71-13.71 13.71z");
}
</style><path class="l-z6nphmh"/>`,
		"fallback": "arcticons:imagin",
	});
}

export default Component;
