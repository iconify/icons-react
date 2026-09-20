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
		"content": `<style>.r05oa340q {
  fill: currentColor;
  d: path("M5 19h3V5H5zm4 0h10V5H9zm-1 0H5zm-4 1V4h16v16z");
}
</style><path class="r05oa340q"/>`,
		"fallback": "material-symbols-light:dock-to-right-outline-sharp",
	});
}

export default Component;
