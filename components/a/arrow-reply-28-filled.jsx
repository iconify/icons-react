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
		"content": `<style>.jod2pk_tj {
  fill: currentColor;
  d: path("M10.707 5.293a1 1 0 0 1 0 1.414L6.414 11H15c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0a8 8 0 0 0-8-8H6.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0");
}
</style><path class="jod2pk_tj"/>`,
		"fallback": "fluent:arrow-reply-28-filled",
	});
}

export default Component;
