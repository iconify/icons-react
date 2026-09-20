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
		"content": `<style>.uuvorn1qa {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2zm-.5 2a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5zm11.88 4.5H14a.5.5 0 0 1-.5-.5V4.62z");
}
</style><path class="uuvorn1qa"/>`,
		"fallback": "fluent:document-24-regular",
	});
}

export default Component;
