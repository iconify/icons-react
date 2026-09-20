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
		"content": `<style>.qbu5oekbm {
  fill: currentColor;
  d: path("M113.29 55.31A58 58 0 0 0 32.93 139l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0-82-82.1l-24.4 23l26.4 26.42a8 8 0 0 1 0 11.32l-20.69 20.69A8 8 0 1 1 111 127l15-15l-26.5-26.58a8 8 0 0 1 .22-11.53l13.55-12.78a4 4 0 0 0 0-5.8Z");
}
</style><path class="qbu5oekbm"/>`,
		"fallback": "ph:heart-straight-break-fill",
	});
}

export default Component;
