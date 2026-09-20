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
		"content": `<style>.g50x9zo3c {
  fill: currentColor;
  d: path("M6.385 14.692h3.769v-3.076H7.269v-1.424h2.885v-.884h-3.77zm.884-.769v-1.538h2v1.538zm4.25.77h.885v-2.366l2.288 2.365h1.23l-2.653-2.73l2.652-2.654h-1.19l-2.327 2.327V9.308h-.885zm5.212-.808h.769v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="g50x9zo3c"/>`,
		"fallback": "material-symbols-light:6k-plus-outline-sharp",
	});
}

export default Component;
