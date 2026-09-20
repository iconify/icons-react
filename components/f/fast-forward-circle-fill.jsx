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
		"content": `<style>.llkzm1bws {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m68.8 110.4l-48 36a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-36a8 8 0 0 1-3.2 6.4l-48 36A8 8 0 0 1 80 172a8 8 0 0 1-8-8V92a8 8 0 0 1 12.8-6.4l48 36a8 8 0 0 1 3.2 6.4V92a8 8 0 0 1 12.8-6.4l48 36a8 8 0 0 1 0 12.8");
}
</style><path class="llkzm1bws"/>`,
		"fallback": "ph:fast-forward-circle-fill",
	});
}

export default Component;
