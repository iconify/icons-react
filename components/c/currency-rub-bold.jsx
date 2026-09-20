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
		"content": `<style>.qqiwiyhws {
  fill: currentColor;
  d: path("M148 156a64 64 0 0 0 0-128H88a12 12 0 0 0-12 12v92H56a12 12 0 0 0 0 24h20v16H56a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h44a12 12 0 0 0 0-24h-44v-16ZM100 52h48a40 40 0 0 1 0 80h-48Z");
}
</style><path class="qqiwiyhws"/>`,
		"fallback": "ph:currency-rub-bold",
	});
}

export default Component;
