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
		"content": `<style>.qoxrwqbcs {
  fill: currentColor;
  d: path("M16.577 21.48v-2.634h-1.538l2.384-4.327v2.635h1.539zM7.884 21V4.48h2.424V3h3.384v1.48h2.424v7.712q-.275.039-.516.088t-.484.128V5.462H8.885v10.73h2.465q-.136.42-.205.861t-.068.89q0 .841.227 1.617q.227.775.663 1.44z");
}
</style><path class="qoxrwqbcs"/>`,
		"fallback": "material-symbols-light:battery-charging-30-sharp",
	});
}

export default Component;
