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
		"content": `<style>.woj5e1roe {
  fill: currentColor;
  d: path("M10.28 6.28a.75.75 0 1 0-1.06-1.06l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 1 0 1.06-1.06L5.56 12.5h9.19a8.75 8.75 0 0 1 8.75 8.75a.75.75 0 0 0 1.5 0C25 15.59 20.41 11 14.75 11H5.56z");
}
</style><path class="woj5e1roe"/>`,
		"fallback": "fluent:arrow-reply-28-regular",
	});
}

export default Component;
