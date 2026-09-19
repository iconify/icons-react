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
		"content": `<style>.rugbt8i7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.311 42.5V12.982h-5.917L24 36.447l-9.394-23.465H8.689V42.5M10.73 9.583a2.041 2.041 0 1 1 2.042-2.041h26.539");
}
</style><path class="rugbt8i7p"/>`,
		"fallback": "arcticons:foodsoul",
	});
}

export default Component;
