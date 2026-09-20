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
		"content": `<style>.n18yy-8_x {
  fill: currentColor;
  d: path("M15 5.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m-2.146-1.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647l2.646-2.647a.5.5 0 0 1 .708 0M10.5 11c1.86 0 3.505-.923 4.5-2.337V9.5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.757a5.5 5.5 0 0 0 4.243 9");
}
</style><path class="n18yy-8_x"/>`,
		"fallback": "fluent:comment-checkmark-16-filled",
	});
}

export default Component;
