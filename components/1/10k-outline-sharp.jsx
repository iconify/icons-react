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
		"content": `<style>.ghtkyibgz {
  fill: currentColor;
  d: path("M6.77 14.692h.884V9.308h-2.27v.884H6.77zm2.346 0H13V9.308H9.116zm.884-.884v-3.616h2.116v3.616zm4.444.884h.885v-2.365l2.288 2.365h1.23l-2.653-2.73l2.652-2.654h-1.19l-2.327 2.327V9.308h-.885zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="ghtkyibgz"/>`,
		"fallback": "material-symbols-light:10k-outline-sharp",
	});
}

export default Component;
