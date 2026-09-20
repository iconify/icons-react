import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.icldzwbpl {
  fill: currentColor;
  d: path("M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zM6.5 4h7v24h-7A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4M6 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-1 7v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0m1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m19.5 8h-7V4h7A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5M25 9v2a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0m1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m-1 7v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0");
}
</style><path class="icldzwbpl"/>`,
		"fallback": "fluent:filmstrip-split-32-filled",
	});
}

export default Component;
