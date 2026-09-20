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
		"content": `<style>.debcvxbac {
  fill: currentColor;
  d: path("M6.5 4v9h3V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m-1 3V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V9a2 2 0 0 1 2-2zm0 6V8H4a1 1 0 0 0-1 1v4zm5 0H13V7a1 1 0 0 0-1-1h-1.5z");
}
</style><path class="debcvxbac"/>`,
		"fallback": "fluent:data-histogram-16-regular",
	});
}

export default Component;
