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
		"content": `<style>.diw7z6ajs {
  fill: currentColor;
  d: path("M6.808 11.192h3.884v-.884h-3V8.885h3V5.808H6.808v.884h3v1.424h-3zm6.5 0h3.884V5.808h-3.884zm.884-.884V6.692h2.116v3.616zm-7.884 7.884h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="diw7z6ajs"/>`,
		"fallback": "material-symbols-light:20mp-outline-sharp",
	});
}

export default Component;
