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
		"content": `<style>.es0ihkb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.398 28.514V4.5l12.237 12.613zm12.266 2.72L14.398 43.5V31.054l6.198-5.935zm1.288-1.288l5.65-5.65l-5.848-6.03l-5.84 5.59z");
}
</style><path class="es0ihkb2c"/>`,
		"fallback": "arcticons:ibasso",
	});
}

export default Component;
