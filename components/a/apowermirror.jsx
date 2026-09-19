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
		"content": `<style>.orytrlb9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.979 27.065l7.687-13.314L43.5 34.249H28.168L16.334 13.751L4.5 34.249h12.686");
}
</style><path class="orytrlb9j"/>`,
		"fallback": "arcticons:apowermirror",
	});
}

export default Component;
