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
		"content": `<style>.rqtbehb6i {
  fill: currentColor;
  d: path("M18.5 20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-3H4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.05 2.05 0 0 0 12.172 2H6a2 2 0 0 0-2 2v9h1.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-6 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm6 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="rqtbehb6i"/>`,
		"fallback": "fluent:document-text-extract-24-regular",
	});
}

export default Component;
