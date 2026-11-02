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
		"content": `<style>.etx8y8h4i {
  fill: currentColor;
  d: path("m4.456 12.41l5-8a3 3 0 0 1 5.088 0l5 8A2.999 2.999 0 0 1 17 17H7a3 3 0 0 1-2.544-4.59M19 21H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2");
}
</style><path class="etx8y8h4i"/>`,
		"fallback": "coolicons:eject-fill",
	});
}

export default Component;
