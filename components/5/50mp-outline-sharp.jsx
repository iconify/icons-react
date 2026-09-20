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
		"content": `<style>.idh8zkb2a {
  fill: currentColor;
  d: path("M12.808 11.192h3.884V5.808h-3.884zm.884-.884V6.692h2.116v3.616zm-7.384 7.884h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16zm1-1h14V5H5zM5 5v14zm1.808 6.192h3.884V8.116h-3V6.692h3v-.884H6.808v3.077h3v1.423h-3z");
}
</style><path class="idh8zkb2a"/>`,
		"fallback": "material-symbols-light:50mp-outline-sharp",
	});
}

export default Component;
