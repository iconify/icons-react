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
		"content": `<style>.bhbipeioo {
  fill: currentColor;
  d: path("M18.192 19.385v-3h-3v-1h3v-3h1v3h3v1h-3v3zM1.808 20V4h16v6h-1V7.385h-14V19h13v1zm1-13.615h14V5h-14zm0 0V5z");
}
</style><path class="bhbipeioo"/>`,
		"fallback": "material-symbols-light:add-ad-outline-sharp",
	});
}

export default Component;
