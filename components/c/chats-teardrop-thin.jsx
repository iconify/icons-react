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
		"content": `<style>.soft_174s {
  fill: currentColor;
  d: path("M166.76 76.32A76 76 0 0 0 20 104v64a12 12 0 0 0 12 12h57.33A76.13 76.13 0 0 0 160 228h64a12 12 0 0 0 12-12v-64a76 76 0 0 0-69.24-75.68M28 168v-64a68 68 0 1 1 68 68H32a4 4 0 0 1-4-4m200 48a4 4 0 0 1-4 4h-64a68.16 68.16 0 0 1-62-40a76 76 0 0 0 71.5-95.33A68 68 0 0 1 228 152Z");
}
</style><path class="soft_174s"/>`,
		"fallback": "ph:chats-teardrop-thin",
	});
}

export default Component;
