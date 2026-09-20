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
		"content": `<style>.h_xsr3b2m {
  fill: currentColor;
  d: path("M204 75.64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4A20.13 20.13 0 0 0 204 75.64M180 212H76v-30l52-39l52 39.33Zm0-138.35L128 113L76 74V44h104Z");
}
</style><path class="h_xsr3b2m"/>`,
		"fallback": "ph:hourglass-bold",
	});
}

export default Component;
