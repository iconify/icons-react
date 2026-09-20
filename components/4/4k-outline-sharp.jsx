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
		"content": `<style>.i63ptbc8z {
  fill: currentColor;
  d: path("M12.885 14.692h.884v-2.365l2.289 2.365h1.229l-2.652-2.73l2.652-2.654h-1.19l-2.328 2.327V9.308h-.884zm-3.231 0h.885v-1.5h1.23v-.884h-1.23v-3h-.885v3H7.769v-3h-.884v3.884h2.769zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="i63ptbc8z"/>`,
		"fallback": "material-symbols-light:4k-outline-sharp",
	});
}

export default Component;
