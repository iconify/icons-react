import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p_m3nrb9l {
  fill: currentColor;
  d: path("M80 120v16a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16m168-48v112a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h208a16 16 0 0 1 16 16M96 120a32 32 0 0 0-32-32h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32Zm32 0v-16h16a8 8 0 0 0 0-16h-24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h24a8 8 0 0 0 0-16h-16v-16h8a8 8 0 0 0 0-16Zm82.17-31.7a8 8 0 0 0-9.87 5.53L190 130.45l-10.3-36.62a8 8 0 0 0-15.4 4.34l18 64a8 8 0 0 0 15.4 0l18-64a8 8 0 0 0-5.53-9.87");
}
</style><path class="p_m3nrb9l"/>`,
		"fallback": "ph:dev-to-logo-fill",
	});
}

export default Component;
