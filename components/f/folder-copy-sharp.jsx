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
		"content": `<style>.h2obmccmu {
  fill: currentColor;
  d: path("M2 19.77V7.076h1v11.692h16v1zm3-3V3h6.577l2 2H22v11.77z");
}
</style><path class="h2obmccmu"/>`,
		"fallback": "material-symbols-light:folder-copy-sharp",
	});
}

export default Component;
