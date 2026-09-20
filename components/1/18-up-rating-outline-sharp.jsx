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
		"content": `<style>.feg-u0_wo {
  fill: currentColor;
  d: path("M8.808 14.692h.884V9.308H7.308v.884h1.5zm3 0h3.884V9.308h-3.884zm.884-.769v-1.538h2.116v1.538zm0-2.307v-1.539h2.116v1.539zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="feg-u0_wo"/>`,
		"fallback": "material-symbols-light:18-up-rating-outline-sharp",
	});
}

export default Component;
