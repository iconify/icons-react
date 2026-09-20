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
		"content": `<style>.bsnj6yb-d {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 1 0 1H4.707L12 11.293V7.5a.5.5 0 0 1 1 0v4.9a.6.6 0 0 1-.6.6H7.5a.5.5 0 0 1 0-1h3.793L4 4.707V8.5a.5.5 0 0 1-1 0V3.6a.6.6 0 0 1 .6-.6z");
}
</style><path class="bsnj6yb-d"/>`,
		"fallback": "fluent:arrow-maximize-top-left-bottom-right-16-regular",
	});
}

export default Component;
