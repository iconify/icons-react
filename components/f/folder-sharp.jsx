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
		"content": `<style>.ohawklu8u {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12z");
}
</style><path class="ohawklu8u"/>`,
		"fallback": "material-symbols-light:folder-sharp",
	});
}

export default Component;
