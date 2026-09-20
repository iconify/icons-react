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
		"content": `<style>.rb93z3bkj {
  fill: currentColor;
  d: path("M8.808 11.192h.884V5.808H7.308v.884h1.5zm3.5 0h3.884V8.116h-3V6.692h3v-.884h-3.884zm.884-.769V8.885h2.116v1.538zm-6.884 7.77h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.385H6.308zm7.5 0h.884v-1.5h3v-3.885h-3.884zm.884-2.385v-2.116h2.116v2.116zM4 20V4h16v16z");
}
</style><path class="rb93z3bkj"/>`,
		"fallback": "material-symbols-light:16mp-sharp",
	});
}

export default Component;
