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
		"content": `<style>.ns705whon {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0v-16A.75.75 0 0 1 2.75 5m15.47 1.72a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 1 1-1.06-1.06l5.22-5.22H6.753a.75.75 0 0 1 0-1.5h16.685l-5.22-5.22a.75.75 0 0 1 0-1.06");
}
</style><path class="ns705whon"/>`,
		"fallback": "fluent:arrow-export-ltr-28-regular",
	});
}

export default Component;
