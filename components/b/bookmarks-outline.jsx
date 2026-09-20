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
		"content": `<style>.xaoni8buq {
  fill: currentColor;
  d: path("M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm2-3.025l4-2.15l4 2.15V8H6zM18 18V4H7V2h11q.825 0 1.413.588T20 4v14zM6 8h8z");
}
</style><path class="xaoni8buq"/>`,
		"fallback": "material-symbols:bookmarks-outline",
	});
}

export default Component;
