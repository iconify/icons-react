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
		"content": `<style>.ofhl5yb3q {
  fill: currentColor;
  d: path("M8.885 16.5h6.23v-1h-5.23v-3h4.23v-1h-4.23v-3h5.23v-1h-6.23zM4 20V4h16v16z");
}
</style><path class="ofhl5yb3q"/>`,
		"fallback": "material-symbols-light:e-mobiledata-badge-sharp",
	});
}

export default Component;
