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
		"content": `<style>.ojbxogbum {
  fill: currentColor;
  d: path("M240 80v72a8 8 0 0 1-13.66 5.66L196 127.31l-70.34 70.35a8 8 0 0 1-11.32 0l-96-96a8 8 0 0 1 11.32-11.32L120 180.69L184.69 116l-30.35-30.34A8 8 0 0 1 160 72h72a8 8 0 0 1 8 8");
}
</style><path class="ojbxogbum"/>`,
		"fallback": "ph:arrow-elbow-right-fill",
	});
}

export default Component;
