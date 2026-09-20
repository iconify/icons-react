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
		"content": `<style>.xdc59acmn {
  fill: currentColor;
  d: path("M9.47 11.237a.75.75 0 0 1 1.06 0l2.486 2.486A2 2 0 0 1 12 14H8a2 2 0 0 1-1.016-.277zM12 6a2 2 0 0 1 2 2v4c0 .37-.101.718-.277 1.016l-2.486-2.486a1.75 1.75 0 0 0-2.474 0l-2.486 2.486A2 2 0 0 1 6 12V8a2 2 0 0 1 2-2zM6.5 1a4.5 4.5 0 0 1 4.472 4H7.75A2.75 2.75 0 0 0 5 7.75v1.992A4.5 4.5 0 0 1 6.5 1m5 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="xdc59acmn"/>`,
		"fallback": "fluent:circle-image-16-filled",
	});
}

export default Component;
