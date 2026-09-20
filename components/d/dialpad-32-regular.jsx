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
		"content": `<style>.ackfdybph {
  fill: currentColor;
  d: path("M11 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7-21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="ackfdybph"/>`,
		"fallback": "fluent:dialpad-32-regular",
	});
}

export default Component;
