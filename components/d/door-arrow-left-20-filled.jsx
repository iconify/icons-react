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
		"content": `<style>.l6487h9we {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M14 2a2 2 0 0 1 2 2v5.208A5.503 5.503 0 0 0 9 14.5c0 1.33.472 2.549 1.258 3.5H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm.854 10.147a.5.5 0 0 0-.707 0l-2.002 2.001a.5.5 0 0 0 .002.706l2 2a.5.5 0 1 0 .707-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.146-1.146a.5.5 0 0 0 0-.707M7 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="l6487h9we"/>`,
		"fallback": "fluent:door-arrow-left-20-filled",
	});
}

export default Component;
