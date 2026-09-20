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
		"content": `<style>.rn1mih4pl {
  fill: currentColor;
  d: path("M16.73 13.885h.77v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zm-5.21.807h.884v-2.365l2.288 2.365h1.23l-2.653-2.73l2.652-2.654h-1.19l-2.327 2.327V9.308h-.885zm-5.25 0h3.884V9.308H6.269v.884h3v1.424h-2v.769h2v1.423h-3zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="rn1mih4pl"/>`,
		"fallback": "material-symbols-light:3k-plus-outline-sharp",
	});
}

export default Component;
