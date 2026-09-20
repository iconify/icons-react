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
		"content": `<style>.ff35vdbca {
  fill: currentColor;
  d: path("M120 140a12 12 0 0 1-12-12V45l-7.51 7.51a12 12 0 0 1-17-17l28-28a12 12 0 0 1 17 0l28 28a12 12 0 1 1-17 17L132 45v83a12 12 0 0 1-12 12m76-18.48V96a20 20 0 0 0-20-20h-12a12 12 0 0 0 0 24h8v68.3a32 32 0 0 0-43.71 43.7c.11.2.23.39.35.58l22.26 34a12 12 0 1 0 20.1-13.15l-22-33.66a8 8 0 0 1 14-7.77c.11.2.23.39.36.58l10.64 16.3a12 12 0 0 0 22-6.57V154a70.66 70.66 0 0 1 16 44.61V240a12 12 0 0 0 24 0v-41.35a94.91 94.91 0 0 0-40-77.13M76 76H64a20 20 0 0 0-20 20v104a12 12 0 0 0 24 0V100h8a12 12 0 0 0 0-24");
}
</style><path class="ff35vdbca"/>`,
		"fallback": "ph:hand-deposit-bold",
	});
}

export default Component;
