import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ptr5jtake {
  fill: currentColor;
  d: path("M5.5 2a3.5 3.5 0 0 1 3.354 2.5H20a5 5 0 0 1 0 10H8a3.5 3.5 0 1 0 0 7h14.44l-2.22-2.22a.75.75 0 1 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L22.44 23H8a5 5 0 0 1 0-10h12a3.5 3.5 0 1 0 0-7H8.964A3.5 3.5 0 1 1 5.5 2");
}
</style><path class="ptr5jtake"/>`,
		"fallback": "fluent:flow-arrow-28-filled",
	});
}

export default Component;
