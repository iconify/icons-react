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
		"content": `<style>.ut8nat06v {
  fill: currentColor;
  d: path("M7.221 21q-1.767 0-3.008-1.236T2.97 16.77q0-1.358.767-2.43t1.966-1.531H3v-1h4.539v4.538h-1v-2.771q-1.118.237-1.843 1.127t-.725 2.046q0 1.364.947 2.308q.948.944 2.303.944zM7.5 8.5h9v-1h-9zM9.923 20v-3.5H13.5v-1H9.923v-3H16.5v-1H9.923V9.423H4V4h16v16z");
}
</style><path class="ut8nat06v"/>`,
		"fallback": "material-symbols-light:article-shortcut-sharp",
	});
}

export default Component;
