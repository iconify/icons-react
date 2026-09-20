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
		"content": `<style>.chvg1-b7r {
  fill: currentColor;
  d: path("M16.577 21.48v-2.634h-1.538l2.384-4.327v2.635h1.539zM7.884 21V4.48h2.424V3h3.384v1.48h2.424v7.712q-2.135.275-3.587 1.898t-1.452 3.852q0 .843.227 1.618t.663 1.44z");
}
</style><path class="chvg1-b7r"/>`,
		"fallback": "material-symbols-light:battery-charging-full-sharp",
	});
}

export default Component;
