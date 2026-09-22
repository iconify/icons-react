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
		"content": `<style>.v2ftptbxx {
  fill: currentColor;
  d: path("M11.192 19H21v-5.808h-9.808zM3 10.808h8.808V5H3zM3 19h5.808v-5.808H3zm14-8.192v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="v2ftptbxx"/>`,
		"fallback": "material-symbols-light:apps-plus",
	});
}

export default Component;
