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
		"content": `<style>.r9ilwib0g {
  fill: currentColor;
  d: path("M148 96V48a12 12 0 0 1 24 0v36h36a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m-52 52H48a12 12 0 0 0 0 24h36v36a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m112 0h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-36h36a12 12 0 0 0 0-24M96 36a12 12 0 0 0-12 12v36H48a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12");
}
</style><path class="r9ilwib0g"/>`,
		"fallback": "ph:corners-in-bold",
	});
}

export default Component;
