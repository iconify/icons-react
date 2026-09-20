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
		"content": `<style>.zrgburbnk {
  fill: currentColor;
  d: path("M8.25 21L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21zm.9-4.75L12 13.4l2.85 2.85l1.4-1.4L13.4 12l2.85-2.85l-1.4-1.4L12 10.6L9.15 7.75l-1.4 1.4L10.6 12l-2.85 2.85zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7");
}
</style><path class="zrgburbnk"/>`,
		"fallback": "material-symbols:dangerous-outline",
	});
}

export default Component;
