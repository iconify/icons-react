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
		"content": `<style>.d5q876bri {
  fill: currentColor;
  d: path("M5 9a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.5V9a5.5 5.5 0 1 0-11 0v1H9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7q-.26 0-.5-.063v.313a2.25 2.25 0 0 0 2.096 2.245l.154.005h1.128a2.25 2.25 0 1 1 0 1.5H8.75a3.75 3.75 0 0 1-3.745-3.55L5 16.25z");
}
</style><path class="d5q876bri"/>`,
		"fallback": "fluent:headset-24-filled",
	});
}

export default Component;
