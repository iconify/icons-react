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
		"content": `<style>.thb_myb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25 14.75L8.979 5.5V24zm0 18.5L8.979 24v18.5zM41.022 24L25 14.75v18.5z");
}
</style><path class="thb_myb4o"/>`,
		"fallback": "arcticons:gonemad",
	});
}

export default Component;
