import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gv9s4pbxi {
  fill: currentColor;
  d: path("M7.25 2.5A4.75 4.75 0 0 0 2.5 7.25v17.5a4.75 4.75 0 0 0 4.75 4.75h11.5a1.25 1.25 0 1 0 0-2.5H7.25A2.25 2.25 0 0 1 5 24.75V7.25A2.25 2.25 0 0 1 7.25 5h11.5a1.25 1.25 0 1 0 0-2.5zm15.884 6.116a1.25 1.25 0 0 0-1.768 1.768l4.366 4.366H11.25a1.25 1.25 0 1 0 0 2.5h14.482l-4.366 4.366a1.25 1.25 0 0 0 1.768 1.768l6.5-6.5a1.25 1.25 0 0 0 0-1.768z");
}
</style><path class="gv9s4pbxi"/>`,
		"fallback": "fluent:arrow-exit-32-filled",
	});
}

export default Component;
