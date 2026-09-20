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
		"content": `<style>.jz43aobnd {
  fill: currentColor;
  d: path("M12.885 14.692h.884v-2.365l2.289 2.365h1.211l-2.634-2.73l2.634-2.654h-1.173l-2.327 2.327V9.308h-.885zm-6 0h3.884V9.308H6.885zm.884-3.076v-1.539h2.116v1.539zm0 2.307v-1.538h2.116v1.538zM4 20V4h16v16z");
}
</style><path class="jz43aobnd"/>`,
		"fallback": "material-symbols-light:8k-sharp",
	});
}

export default Component;
