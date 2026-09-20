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
		"content": `<style>.a1pizybun {
  fill: currentColor;
  d: path("M1.75 3a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 1.75 3m8.47.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H4.75a.75.75 0 0 1 0-1.5h7.69l-2.22-2.22a.75.75 0 0 1 0-1.06");
}
</style><path class="a1pizybun"/>`,
		"fallback": "fluent:arrow-export-ltr-16-filled",
	});
}

export default Component;
