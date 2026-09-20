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
		"content": `<style>.tldilgbgk {
  fill: currentColor;
  d: path("M2 19.77V7.076h1v11.692h16v1zm3-3V3h6.577l2 2H22v11.77zm1-1h15V6h-7.825l-2-2H6zm0 0V4z");
}
</style><path class="tldilgbgk"/>`,
		"fallback": "material-symbols-light:folder-copy-outline-sharp",
	});
}

export default Component;
