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
		"content": `<style>.k3ojr8bav {
  fill: currentColor;
  d: path("M216 76H28V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-36h216v36a4 4 0 0 0 8 0v-96a36 36 0 0 0-36-36M28 84h80v80H28Zm88 80V84h100a28 28 0 0 1 28 28v52Z");
}
</style><path class="k3ojr8bav"/>`,
		"fallback": "ph:bed-thin",
	});
}

export default Component;
