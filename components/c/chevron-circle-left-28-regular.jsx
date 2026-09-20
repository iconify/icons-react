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
		"content": `<style>.jj4u85rir {
  fill: currentColor;
  d: path("M14 3.5c5.799 0 10.5 4.701 10.5 10.5S19.799 24.5 14 24.5S3.5 19.799 3.5 14S8.201 3.5 14 3.5M26 14c0-6.627-5.373-12-12-12S2 7.373 2 14s5.373 12 12 12s12-5.373 12-12m-9.22-4.97a.75.75 0 0 0-1.06-1.06l-5.5 5.5a.75.75 0 0 0 0 1.06l5.5 5.5a.75.75 0 1 0 1.06-1.06L11.81 14z");
}
</style><path class="jj4u85rir"/>`,
		"fallback": "fluent:chevron-circle-left-28-regular",
	});
}

export default Component;
