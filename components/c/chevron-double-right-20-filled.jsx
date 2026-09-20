import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yklj0kb-r {
  fill: currentColor;
  d: path("M4.47 4.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06-1.06L9.19 10L4.47 5.28a.75.75 0 0 1 0-1.06m5.5 0a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06-1.06L14.69 10L9.97 5.28a.75.75 0 0 1 0-1.06");
}
</style><path class="yklj0kb-r"/>`,
		"fallback": "fluent:chevron-double-right-20-filled",
	});
}

export default Component;
