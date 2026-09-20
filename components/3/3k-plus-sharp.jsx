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
		"content": `<style>.ssnq-6p_e {
  fill: currentColor;
  d: path("M16.73 13.885h.77v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zm-5.21.807h.884v-2.365l2.288 2.365h1.212l-2.635-2.73l2.635-2.654H14.73l-2.327 2.327V9.308h-.885zm-5.25 0h3.884V9.308H6.269v.884h3v1.424h-2v.769h2v1.423h-3zM4 20V4h16v16z");
}
</style><path class="ssnq-6p_e"/>`,
		"fallback": "material-symbols-light:3k-plus-sharp",
	});
}

export default Component;
