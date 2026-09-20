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
		"content": `<style>.vrzq2bc3m {
  fill: currentColor;
  d: path("M4.539 19.346v-1.5H2v-9h2V5.231h16v3.615h2v9h-2.538v1.5H18.5v-1.5H5.539v1.5zM3 16.846h18v-7h-2v4.5H5v-4.5H3zm3-3.5h12v-4.5h1V6.231H5v2.615h1zm6 1");
}
</style><path class="vrzq2bc3m"/>`,
		"fallback": "material-symbols-light:chair-outline-sharp",
	});
}

export default Component;
