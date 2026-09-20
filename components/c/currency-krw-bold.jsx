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
		"content": `<style>.twgfs5_7a {
  fill: currentColor;
  d: path("M240 124h-16.17l19.29-47.48a12 12 0 0 0-22.24-9l-23 56.51h-35.8l-23-56.51a12 12 0 0 0-22.24 0L93.92 124H58.08l-23-56.51a12 12 0 0 0-22.24 9L32.17 124H16a12 12 0 0 0 0 24h25.92l23 56.52a12 12 0 0 0 22.24 0l23-56.52H146l23 56.52a12 12 0 0 0 22.24 0l23-56.52H240a12 12 0 0 0 0-24M76 168.12L67.83 148h16.34ZM119.83 124l8.17-20.11l8.17 20.11ZM180 168.12L171.83 148h16.34Z");
}
</style><path class="twgfs5_7a"/>`,
		"fallback": "ph:currency-krw-bold",
	});
}

export default Component;
