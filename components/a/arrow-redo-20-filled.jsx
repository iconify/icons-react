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
		"content": `<style>.tnsv0uesp {
  fill: currentColor;
  d: path("M13.14 6.5h-2.387a.75.75 0 1 0 0 1.5h4.4c.47 0 .85-.38.85-.85v-4.4a.75.75 0 0 0-1.5 0v2.947l-3.059-2.66a5.25 5.25 0 0 0-6.888 7.925l8.172 7.104a.75.75 0 1 0 .984-1.132L5.54 9.83a3.75 3.75 0 1 1 4.92-5.66z");
}
</style><path class="tnsv0uesp"/>`,
		"fallback": "fluent:arrow-redo-20-filled",
	});
}

export default Component;
