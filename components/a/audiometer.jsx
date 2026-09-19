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
		"content": `<style>.cfzj0cqca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("M6.63 36.5h34.74a.12.12 0 0 1 .13.12v6.76a.12.12 0 0 1-.13.12H6.63a.12.12 0 0 1-.13-.12v-6.76a.12.12 0 0 1 .13-.12Zm0-32h34.74a.12.12 0 0 1 .13.12v6.76a.12.12 0 0 1-.13.12H6.63a.12.12 0 0 1-.13-.12V4.62a.12.12 0 0 1 .13-.12Zm0 21.33h34.74a.13.13 0 0 1 .13.12v6.76a.12.12 0 0 1-.13.12H6.63a.12.12 0 0 1-.13-.12V26a.13.13 0 0 1 .13-.17Zm0-10.66h34.74a.12.12 0 0 1 .13.12v6.76a.13.13 0 0 1-.13.12H6.63a.13.13 0 0 1-.13-.12v-6.76a.12.12 0 0 1 .13-.12Z");
}
</style><path class="cfzj0cqca"/>`,
		"fallback": "arcticons:audiometer",
	});
}

export default Component;
