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
		"content": `<style>.exb7qh4kn {
  fill: currentColor;
  d: path("M204 75.64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4A20.13 20.13 0 0 0 204 75.64M180 44v28H76V44Zm-52 69l-22.67-17h45.1Zm52 99H76v-30l40-30v16a12 12 0 0 0 24 0v-15.89l40 30.24Z");
}
</style><path class="exb7qh4kn"/>`,
		"fallback": "ph:hourglass-medium-bold",
	});
}

export default Component;
