import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b-xmc6bru {
  fill: currentColor;
  d: path("M11 6a.5.5 0 0 0-.5-.5H6.707l1.147-1.146a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .708-.708L6.707 6.5H10.5A.5.5 0 0 0 11 6M2.5 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}
</style><path class="b-xmc6bru"/>`,
		"fallback": "fluent:arrow-step-in-left-12-regular",
	});
}

export default Component;
