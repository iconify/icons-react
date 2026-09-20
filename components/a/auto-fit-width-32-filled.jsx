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
		"content": `<style>.e4x8zd_dr {
  fill: currentColor;
  d: path("M4.25 6c.647 0 1.18.492 1.243 1.122l.007.128v17.5a1.25 1.25 0 1 1-2.5 0V7.25l.007-.128A1.25 1.25 0 0 1 4.25 6m23.5 0c.647 0 1.18.492 1.243 1.122L29 7.25v17.5a1.25 1.25 0 1 1-2.5 0V7.25l.007-.128A1.25 1.25 0 0 1 27.75 6m-8.634 5.366a1.25 1.25 0 0 1 1.768 0l3.75 3.75a1.25 1.25 0 0 1 0 1.768l-3.75 3.75l-.095.086a1.25 1.25 0 0 1-1.759-1.76l.086-.094l1.616-1.616h-9.464l1.616 1.616a1.25 1.25 0 0 1-1.768 1.768l-3.75-3.75l-.086-.095a1.25 1.25 0 0 1 .086-1.673l3.75-3.75l.095-.086a1.25 1.25 0 0 1 1.759 1.76l-.086.094l-1.616 1.616h9.464l-1.616-1.616a1.25 1.25 0 0 1 0-1.768");
}
</style><path class="e4x8zd_dr"/>`,
		"fallback": "fluent:auto-fit-width-32-filled",
	});
}

export default Component;
