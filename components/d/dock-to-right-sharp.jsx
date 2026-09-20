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
		"content": `<style>.miqrinbch {
  fill: currentColor;
  d: path("M9 19h10V5H9zm-5 1V4h16v16z");
}
</style><path class="miqrinbch"/>`,
		"fallback": "material-symbols-light:dock-to-right-sharp",
	});
}

export default Component;
