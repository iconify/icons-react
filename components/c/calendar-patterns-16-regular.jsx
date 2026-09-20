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
		"content": `<style>.urc18bbfp {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V6H3zM11.707 7H13v.293L10.293 10H8.707zm-1.414 0l-3 3H5.707l3-3zm-6 3H3v-.293L5.707 7h1.586zM3 8.293V7h1.293zM11.707 10L13 8.707V10z");
}
</style><path class="urc18bbfp"/>`,
		"fallback": "fluent:calendar-patterns-16-regular",
	});
}

export default Component;
