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
		"content": `<style>.k130ilboz {
  fill: currentColor;
  d: path("m9.293 10l4.853 4.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L3 3.707V13.5a.5.5 0 0 0 1 0V10zM13 10h-.879l-8-8H13a.5.5 0 0 1 .407.79L11.114 6l2.293 3.21A.5.5 0 0 1 13 10");
}
</style><path class="k130ilboz"/>`,
		"fallback": "fluent:flag-off-16-filled",
	});
}

export default Component;
