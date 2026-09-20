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
		"content": `<style>.kta4y0u5q {
  fill: currentColor;
  d: path("M4 12a8 8 0 1 1 16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2");
}
</style><path class="kta4y0u5q"/>`,
		"fallback": "fluent:circle-half-fill-24-filled",
	});
}

export default Component;
