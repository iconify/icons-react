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
		"content": `<style>.oaneavb2v {
  fill: currentColor;
  d: path("M231.12 107.72a35.91 35.91 0 0 1-46.19 6.8a.14.14 0 0 0-.1 0l-70.35 70.36v.08a36 36 0 1 1-66.37 22.92a36 36 0 1 1 22.92-66.37a.14.14 0 0 0 .1 0l70.35-70.36v-.08a36 36 0 1 1 66.37-22.92a36 36 0 0 1 23.27 59.57");
}
</style><path class="oaneavb2v"/>`,
		"fallback": "ph:bone-fill",
	});
}

export default Component;
