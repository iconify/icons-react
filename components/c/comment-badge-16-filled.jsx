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
		"content": `<style>.jfuub_krs {
  fill: currentColor;
  d: path("M14 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M3.5 2h7.67A3 3 0 0 0 15 5.83V9.5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2");
}
</style><path class="jfuub_krs"/>`,
		"fallback": "fluent:comment-badge-16-filled",
	});
}

export default Component;
