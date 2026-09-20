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
		"content": `<style>.qewjwhb9y {
  fill: currentColor;
  d: path("M10 21.308L.692 12L10 2.692l1.064 1.064L2.819 12l8.244 8.244z");
}
</style><path class="qewjwhb9y"/>`,
		"fallback": "material-symbols-light:arrow-back-ios",
	});
}

export default Component;
