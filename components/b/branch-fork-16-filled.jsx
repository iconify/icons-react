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
		"content": `<style>.e99osqbei {
  fill: currentColor;
  d: path("M7 3.5a2.5 2.5 0 0 1-2 2.45V8h4.5A1.5 1.5 0 0 0 11 6.5v-.55a2.5 2.5 0 1 1 1 0v.55A2.5 2.5 0 0 1 9.5 9H5v1.05a2.5 2.5 0 1 1-1 0v-4.1A2.5 2.5 0 1 1 7 3.5");
}
</style><path class="e99osqbei"/>`,
		"fallback": "fluent:branch-fork-16-filled",
	});
}

export default Component;
