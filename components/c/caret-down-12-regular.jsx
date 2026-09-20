import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u60xuh2bo {
  fill: currentColor;
  d: path("M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09M4 5l1.823 1.823a.25.25 0 0 0 .354 0L8 5z");
}
</style><path class="u60xuh2bo"/>`,
		"fallback": "fluent:caret-down-12-regular",
	});
}

export default Component;
