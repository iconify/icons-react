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
		"content": `<style>.jx7q04b3l {
  fill: currentColor;
  d: path("M208 34H80a14 14 0 0 0-14 14v18H48a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M78 48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v74.2l-20.1-20.1a14 14 0 0 0-19.8 0L94.2 178H80a2 2 0 0 1-2-2Zm100 160a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h18v98a14 14 0 0 0 14 14h98Zm30-30h-96.83l67.41-67.41a2 2 0 0 1 2.83 0L210 139.17V176a2 2 0 0 1-2 2m-88-68a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10");
}
</style><path class="jx7q04b3l"/>`,
		"fallback": "ph:images-square-light",
	});
}

export default Component;
