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
		"content": `<style>.m6tvkffwh {
  fill: currentColor;
  d: path("M180 72H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V92a20 20 0 0 0-20-20m-4 128H40V96h136Zm64-148v124a12 12 0 0 1-24 0V56H64a12 12 0 0 1 0-24h156a20 20 0 0 1 20 20");
}
</style><path class="m6tvkffwh"/>`,
		"fallback": "ph:browsers-simple-bold",
	});
}

export default Component;
