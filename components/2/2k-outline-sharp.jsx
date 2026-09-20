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
		"content": `<style>.b56bih3bq {
  fill: currentColor;
  d: path("M12.885 14.692h.884v-2.365l2.289 2.365h1.229l-2.652-2.73l2.652-2.654h-1.19l-2.328 2.327V9.308h-.884zm-6 0h3.884v-.884h-3v-1.423h3V9.308H6.885v.884h3v1.424h-3zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="b56bih3bq"/>`,
		"fallback": "material-symbols-light:2k-outline-sharp",
	});
}

export default Component;
