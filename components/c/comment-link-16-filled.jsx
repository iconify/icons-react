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
		"content": `<style>.oncf0s_lp {
  fill: currentColor;
  d: path("M8.5 1a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 1 1 0-3H9a.5.5 0 0 0 0-1zM12 1a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zM8 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m-3 0c0-.537.12-1.045.337-1.5H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738L8.688 12H12.5A2.5 2.5 0 0 0 15 9.5V5.95A3.5 3.5 0 0 1 12.5 7h-4A3.5 3.5 0 0 1 5 3.5");
}
</style><path class="oncf0s_lp"/>`,
		"fallback": "fluent:comment-link-16-filled",
	});
}

export default Component;
