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
		"content": `<style>.klnox_6lx {
  fill: currentColor;
  d: path("M5.791 6.72a.75.75 0 0 1-.002 1.061L4.566 9H8.25a.75.75 0 0 1 0 1.5H4.56l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.061l2.51-2.5a.75.75 0 0 1 1.061.002m8.429 0a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-3.69a.75.75 0 0 1 0-1.5h3.69l-1.22-1.22a.75.75 0 0 1 0-1.06");
}
</style><path class="klnox_6lx"/>`,
		"fallback": "fluent:arrow-fit-20-filled",
	});
}

export default Component;
