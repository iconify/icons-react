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
		"content": `<style>.qwv1xl1lq {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm2.5-8.5h3v-3h-3zm6 0h3v-3h-3zm-6 6h3v-3h-3zm6 0h3v-3h-3z");
}
</style><path class="qwv1xl1lq"/>`,
		"fallback": "material-symbols-light:dataset-outline-sharp",
	});
}

export default Component;
