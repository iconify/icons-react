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
		"content": `<style>.li2l0gb2c {
  fill: currentColor;
  d: path("M228.6 63.46A31.83 31.83 0 0 0 204.1 52h-.1a32 32 0 1 0-59.17 17a4 4 0 0 1-.51 5L74 144.36a4 4 0 0 1-5 .51A32 32 0 1 0 51.9 204h.1a32 32 0 1 0 59.16-17a4 4 0 0 1 .51-5L182 111.64a4 4 0 0 1 5-.51a32 32 0 0 0 41.6-47.67m-6.5 36.34a24 24 0 0 1-30.8 4.55a12 12 0 0 0-14.93 1.65L106 176.37a12 12 0 0 0-1.63 14.93a24 24 0 1 1-44.09 9a4 4 0 0 0-1.12-3.45a4 4 0 0 0-2.83-1.17a4 4 0 0 0-.62.05a24 24 0 1 1 9-44.09A12 12 0 0 0 79.63 150L150 79.63a12 12 0 0 0 1.63-14.93a24 24 0 1 1 44.09-9a4 4 0 0 0 4.57 4.57A24 24 0 0 1 222.1 99.8");
}
</style><path class="li2l0gb2c"/>`,
		"fallback": "ph:bone-thin",
	});
}

export default Component;
