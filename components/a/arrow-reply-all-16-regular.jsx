import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qm_shkbpe {
  fill: currentColor;
  d: path("M6.354 4.354a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L3.207 7.5zm3 0a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L6.707 8H8.5a4.5 4.5 0 0 1 4.5 4.5a.5.5 0 0 0 1 0A5.5 5.5 0 0 0 8.5 7H6.707z");
}
</style><path class="qm_shkbpe"/>`,
		"fallback": "fluent:arrow-reply-all-16-regular",
	});
}

export default Component;
