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
		"content": `<style>.yafzetbwp {
  fill: currentColor;
  d: path("m224.49 184.49l-48 48a12 12 0 0 1-17-17L187 188H72a12 12 0 0 1-12-12V32a12 12 0 0 1 24 0v132h103l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17");
}
</style><path class="yafzetbwp"/>`,
		"fallback": "ph:arrow-elbow-down-right-bold",
	});
}

export default Component;
