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
		"content": `<style>.h3os2ybrl {
  fill: currentColor;
  d: path("M8.808 14.692h.884V9.308H7.308v.884h1.5zm3 0h3.884V9.308h-3.884zm.884-.769v-1.538h2.116v1.538zm0-2.307v-1.539h2.116v1.539zM4 20V4h16v16z");
}
</style><path class="h3os2ybrl"/>`,
		"fallback": "material-symbols-light:18-up-rating-sharp",
	});
}

export default Component;
