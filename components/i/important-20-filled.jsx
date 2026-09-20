import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zors4ib9s {
  fill: currentColor;
  d: path("M10 2a3 3 0 0 0-3 3c0 2.227.789 5.204 1.225 6.685A1.84 1.84 0 0 0 10 13c.81 0 1.54-.518 1.775-1.31C12.212 10.213 13 7.25 13 5a3 3 0 0 0-3-3m0 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="zors4ib9s"/>`,
		"fallback": "fluent:important-20-filled",
	});
}

export default Component;
