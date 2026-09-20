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
		"content": `<style>.gkx_4obev {
  fill: currentColor;
  d: path("M18.192 19.385v-3h-3v-1h3v-3h1v3h3v1h-3v3zM1.808 20V4h16v6h-1V7.385h-14V19h13v1z");
}
</style><path class="gkx_4obev"/>`,
		"fallback": "material-symbols-light:add-ad-sharp",
	});
}

export default Component;
