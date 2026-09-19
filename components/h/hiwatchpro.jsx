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
		"content": `<style>.tk_ecqynr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.208 42.071L42.62 34.75v-21.5L29.207 5.083V32.75m-10.413-17.5v27.667L5.38 34.75v-21.5l13.413-7.32M29.208 24H18.794");
}
</style><path class="tk_ecqynr"/>`,
		"fallback": "arcticons:hiwatchpro",
	});
}

export default Component;
