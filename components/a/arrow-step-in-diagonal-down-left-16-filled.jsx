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
		"content": `<style>.h4zwnwh3m {
  fill: currentColor;
  d: path("M13.854 2.146a.5.5 0 0 1 0 .708L8.707 8H12.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v3.793l5.146-5.147a.5.5 0 0 1 .708 0M4 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="h4zwnwh3m"/>`,
		"fallback": "fluent:arrow-step-in-diagonal-down-left-16-filled",
	});
}

export default Component;
