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
		"content": `<style>.ao3meci7w {
  fill: currentColor;
  d: path("M16.577 21.48v-2.634h-1.538l2.384-4.327v2.635h1.539zM7.884 21V4.48h2.424V3h3.384v1.48h2.424v7.712q-.275.039-.516.088t-.484.128V5.462H8.885v12.48h2.192q0 .843.227 1.618t.663 1.44z");
}
</style><path class="ao3meci7w"/>`,
		"fallback": "material-symbols-light:battery-charging-20-sharp",
	});
}

export default Component;
