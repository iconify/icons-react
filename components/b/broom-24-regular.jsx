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
		"content": `<style>.h7uretbiz {
  fill: currentColor;
  d: path("M22.453 1.923a.75.75 0 0 1 0 1.06l-6.928 6.929a5.75 5.75 0 0 1-.496 7.567l-.832.832l-2.787 4.18a.75.75 0 0 1-1.154.115L1.77 14.12a.75.75 0 0 1 .115-1.154l4.18-2.787l.832-.832a5.75 5.75 0 0 1 7.567-.496l6.929-6.928a.75.75 0 0 1 1.06 0M7.604 10.762l6.01 6.01l.354-.353a4.25 4.25 0 0 0-6.01-6.01zm-1.156.965l-2.97 1.98l7.192 7.191l1.98-2.97z");
}
</style><path class="h7uretbiz"/>`,
		"fallback": "fluent:broom-24-regular",
	});
}

export default Component;
