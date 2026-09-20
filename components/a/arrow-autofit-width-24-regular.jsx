import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p1lw2l6nw {
  fill: currentColor;
  d: path("M5.72 13.72a.75.75 0 0 1 1.06 1.06L5.56 16h3.69a.75.75 0 0 1 0 1.5H5.56l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zm11.5 0a.75.75 0 0 1 1.06 0l2.5 2.5l.052.056a.75.75 0 0 1-.052 1.004l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22h-3.69a.75.75 0 0 1 0-1.5h3.69l-1.22-1.22a.75.75 0 0 1 0-1.06M17.75 4A2.25 2.25 0 0 1 20 6.25v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 1-1.5 0v-5A2.25 2.25 0 0 1 6.25 4z");
}
</style><path class="p1lw2l6nw"/>`,
		"fallback": "fluent:arrow-autofit-width-24-regular",
	});
}

export default Component;
