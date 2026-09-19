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
		"content": `<style>.gijxs_l8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.873 13.786c-5.524-5.231-14.173-5.231-19.697 0m15.844 3.813a8.89 8.89 0 0 0-12.08 0M29.475 26.1l-2.236-3.355l-.005-.003h-6.481L18.514 26.1h-5.623a2.205 2.205 0 0 0-2.205 2.216l.066 12.99a2.205 2.205 0 0 0 2.205 2.194H35.02a2.205 2.205 0 0 0 2.205-2.205v-12.99A2.205 2.205 0 0 0 35.02 26.1zm-5.481 14.114a5.868 5.868 0 0 1 0-11.736h0a5.858 5.858 0 1 1 0 11.716h0z");
}

.yu8o9xbkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.677 10.022c-7.632-7.363-19.722-7.363-27.354 0");
}
</style><path class="yu8o9xbkx"/><path class="gijxs_l8j"/>`,
		"fallback": "arcticons:image-sync",
	});
}

export default Component;
