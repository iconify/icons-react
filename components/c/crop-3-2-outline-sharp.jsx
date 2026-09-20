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
		"content": `<style>.klxs3jbia {
  fill: currentColor;
  d: path("M4 17V7h16v10zm1-1h14V8H5zm0 0V8z");
}
</style><path class="klxs3jbia"/>`,
		"fallback": "material-symbols-light:crop-3-2-outline-sharp",
	});
}

export default Component;
