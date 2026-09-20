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
		"content": `<style>.d72na3bdt {
  fill: currentColor;
  d: path("M240 192a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-88H40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 136 104H96v80h136a8 8 0 0 1 8 8");
}
</style><path class="d72na3bdt"/>`,
		"fallback": "ph:arrow-elbow-left-up-fill",
	});
}

export default Component;
