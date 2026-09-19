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
		"content": `<style>.jx87_3bmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.445 21.846l6.575-4.705V4.5l-6.575 4.705zM28.979 43.5l6.576-4.705V26.154l-6.576 4.705zm-9.959 0l-6.575-4.705m23.11-29.59L28.98 4.5v13.989l-9.96 7.126v-4.166l-6.575 4.705v12.641L19.02 43.5v-9.823l16.535-11.831z");
}
</style><path class="jx87_3bmz"/>`,
		"fallback": "arcticons:hexoline-icon-pack",
	});
}

export default Component;
