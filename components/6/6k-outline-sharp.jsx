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
		"content": `<style>.oqh70s82f {
  fill: currentColor;
  d: path("M12.885 14.692h.884v-2.365l2.289 2.365h1.229l-2.652-2.73l2.652-2.654h-1.19l-2.328 2.327V9.308h-.884zm-6 0h3.884v-3.076h-3v-1.424h3v-.884H6.885zm.884-.769v-1.538h2.116v1.538zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="oqh70s82f"/>`,
		"fallback": "material-symbols-light:6k-outline-sharp",
	});
}

export default Component;
