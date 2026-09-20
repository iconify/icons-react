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
		"content": `<style>.ivk3s3bva {
  fill: currentColor;
  d: path("m229.66 173.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 176H88a64 64 0 0 1 0-128h88a8 8 0 0 1 0 16H88a48 48 0 0 0 0 96h116.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="ivk3s3bva"/>`,
		"fallback": "ph:arrow-u-down-right",
	});
}

export default Component;
