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
		"content": `<style>.gnf8i_bip {
  fill: currentColor;
  d: path("M7.5 17V3h11v14zm1-1h9V4h-9zm-4 4V6.616h1V19h9.385v1zm4-4V4z");
}
</style><path class="gnf8i_bip"/>`,
		"fallback": "material-symbols-light:content-copy-outline-sharp",
	});
}

export default Component;
