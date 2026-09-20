import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u1rqtp0dz {
  fill: currentColor;
  d: path("M9.28 3.22a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L6.56 8.5H13a1.5 1.5 0 0 1 1.5 1.5v6.25a.75.75 0 0 0 1.5 0V10a3 3 0 0 0-3-3H6.56l2.72-2.72a.75.75 0 0 0 0-1.06");
}
</style><path class="u1rqtp0dz"/>`,
		"fallback": "fluent:arrow-turn-up-left-20-filled",
	});
}

export default Component;
