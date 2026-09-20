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
		"content": `<style>.h5ufjvuma {
  fill: currentColor;
  d: path("M18.5 20a.5.5 0 0 1-.5.5h-5.732A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.1 2.1 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7.498a6.5 6.5 0 0 1 1.5-.422V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM12 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M7 18l.001 2.503a.5.5 0 1 1-1 0V18H3.496a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z");
}
</style><path class="h5ufjvuma"/>`,
		"fallback": "fluent:document-add-24-regular",
	});
}

export default Component;
