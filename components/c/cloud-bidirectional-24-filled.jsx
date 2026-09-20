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
		"content": `<style>.hh6f96blz {
  fill: currentColor;
  d: path("M6.08 7.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 16h-4v-3.168a1.75 1.75 0 0 0 1.987-2.82l-2.5-2.5a1.75 1.75 0 0 0-2.475 0l-2.5 2.5A1.75 1.75 0 0 0 10 12.833V16H6.5a4.5 4.5 0 0 1-.42-8.98m8.7 4.76a.75.75 0 0 1-1.06 0l-1.22-1.22v8.88l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L11 19.44v-8.88l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06");
}
</style><path class="hh6f96blz"/>`,
		"fallback": "fluent:cloud-bidirectional-24-filled",
	});
}

export default Component;
