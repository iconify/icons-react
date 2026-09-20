import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dcze8u_be {
  fill: currentColor;
  d: path("M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12M8.97 13.78a.75.75 0 0 0 1.06 0l3.22-3.22v8.69a.75.75 0 0 0 1.5 0v-8.69l3.22 3.22a.75.75 0 1 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 0 1.06");
}
</style><path class="dcze8u_be"/>`,
		"fallback": "fluent:arrow-circle-up-28-filled",
	});
}

export default Component;
