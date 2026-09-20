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
		"content": `<style>.ubjlabrxa {
  fill: currentColor;
  d: path("M18 19.75a2.25 2.25 0 0 1-2.096 2.245L15.75 22h-7.5a2.25 2.25 0 0 1-2.245-2.096L6 19.75V4.25a2.25 2.25 0 0 1 2.096-2.245L8.25 2h7.5a2.25 2.25 0 0 1 2.245 2.096L18 4.25zM19 5h.75a2.25 2.25 0 0 1 2.245 2.096L22 7.25v9.5a2.25 2.25 0 0 1-2.096 2.245L19.75 19H19zM5 19h-.75a2.25 2.25 0 0 1-2.245-2.096L2 16.75v-9.5a2.25 2.25 0 0 1 2.096-2.245L4.25 5H5z");
}
</style><path class="ubjlabrxa"/>`,
		"fallback": "fluent:app-recent-24-filled",
	});
}

export default Component;
