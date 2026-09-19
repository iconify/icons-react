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
		"content": `<style>.aihrixdpu {
  fill: currentColor;
  d: path("m19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6l1.4-1.4l4.2 4.2zm0-2.83L8.43 13.54l-4.2-4.2L0 13.57L8.43 22L24 6.43z");
}
</style><path class="aihrixdpu"/>`,
		"fallback": "ic:baseline-done-outline",
	});
}

export default Component;
