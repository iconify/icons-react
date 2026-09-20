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
		"content": `<style>.gvp6pmj4o {
  fill: currentColor;
  d: path("M142.1 19.38a6 6 0 0 0-9.47 2.56l-23.09 63.31L83.2 59.69a6 6 0 0 0-9 .67C52.85 88.39 42 116.53 42 144a86 86 0 0 0 172 0c0-58.6-50.28-106.67-71.9-124.62M128 218a74.09 74.09 0 0 1-74-74c0-23 8.67-46.87 25.77-70.91l28.05 27.22a6 6 0 0 0 9.82-2.25l23.29-63.86C163.35 54.16 202 95.6 202 144a74.09 74.09 0 0 1-74 74");
}
</style><path class="gvp6pmj4o"/>`,
		"fallback": "ph:fire-simple-light",
	});
}

export default Component;
