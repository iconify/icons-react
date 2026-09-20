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
		"content": `<style>.rl__ivf4r {
  fill: currentColor;
  d: path("M200 80v144a8 8 0 0 1-16 0V88h-80v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 104 32v40h88a8 8 0 0 1 8 8");
}
</style><path class="rl__ivf4r"/>`,
		"fallback": "ph:arrow-elbow-up-left-fill",
	});
}

export default Component;
