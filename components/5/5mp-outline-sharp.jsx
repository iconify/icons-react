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
		"content": `<style>.s389d1bbj {
  fill: currentColor;
  d: path("M10.116 11.192H14V8.116h-3V6.692h3v-.884h-3.884v3.077h3v1.423h-3zm-3.808 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="s389d1bbj"/>`,
		"fallback": "material-symbols-light:5mp-outline-sharp",
	});
}

export default Component;
