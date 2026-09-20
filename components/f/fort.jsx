import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g8_0br_0v {
  fill: currentColor;
  d: path("M1 21v-4l2-2V9L1 7V3h2v2h2V3h2v2h2V3h2v4L9 9v1h6V9l-2-2V3h2v2h2V3h2v2h2V3h2v4l-2 2v6l2 2v4h-9v-3q0-.825-.587-1.412T12 16t-1.412.588T10 18v3z");
}
</style><path class="g8_0br_0v"/>`,
		"fallback": "material-symbols:fort",
	});
}

export default Component;
