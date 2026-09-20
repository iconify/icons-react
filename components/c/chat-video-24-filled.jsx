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
		"content": `<style>.ya47wcwbx {
  fill: currentColor;
  d: path("M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.643.397 3.23 1.145 4.65l-1.116 4.29a.85.85 0 0 0 1.036 1.036l4.29-1.117A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10M12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm3 5.162v-2.324l1.734-1.642A.75.75 0 0 1 18 9.741v4.518a.75.75 0 0 1-1.266.545z");
}
</style><path class="ya47wcwbx"/>`,
		"fallback": "fluent:chat-video-24-filled",
	});
}

export default Component;
