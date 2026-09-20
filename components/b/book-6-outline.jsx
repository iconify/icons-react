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
		"content": `<style>.w297_8b-r {
  fill: currentColor;
  d: path("M6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h11v16H6q-.425 0-.712.288T5 19t.288.713T6 20h13V4h2v18zm0-6h9V4H6q-.425 0-.712.288T5 5v11.175q.25-.075.488-.125T6 16m.75-2.5h1.2l.65-1.8h2.825l.625 1.8h1.2l-2.625-7h-1.25zm2.2-2.8l1.025-2.9h.05l1.025 2.9zM5 16.175V4z");
}
</style><path class="w297_8b-r"/>`,
		"fallback": "material-symbols:book-6-outline",
	});
}

export default Component;
