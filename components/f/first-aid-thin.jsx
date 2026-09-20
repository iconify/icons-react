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
		"content": `<style>.tiuv_acfo {
  fill: currentColor;
  d: path("M216 92h-52V40a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H40a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h52v52a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-52h52a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-56a4 4 0 0 0-4 4v56a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-56a4 4 0 0 0-4-4H40a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h56a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 1 4 4Z");
}
</style><path class="tiuv_acfo"/>`,
		"fallback": "ph:first-aid-thin",
	});
}

export default Component;
