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
		"content": `<style>.rsfreebqs {
  fill: currentColor;
  d: path("M16.577 21.48v-2.634h-1.538l2.384-4.327v2.635h1.539zM7.884 21V4.48h2.424V3h3.384v1.48h2.424v7.712q-.275.039-.516.088t-.484.128V5.462H8.885v8.73h3.569q-.644.757-1.01 1.714q-.367.958-.367 2.036q0 .843.227 1.618t.663 1.44z");
}
</style><path class="rsfreebqs"/>`,
		"fallback": "material-symbols-light:battery-charging-50-sharp",
	});
}

export default Component;
