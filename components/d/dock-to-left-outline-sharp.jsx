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
		"content": `<style>.fqwjjtbma {
  fill: currentColor;
  d: path("M16 19h3V5h-3zM5 19h9V5H5zm11 0h3zM3 21V3h18v18z");
}
</style><path class="fqwjjtbma"/>`,
		"fallback": "material-symbols:dock-to-left-outline-sharp",
	});
}

export default Component;
