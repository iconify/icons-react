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
		"content": `<style>.y7uiaqbhw {
  fill: currentColor;
  d: path("M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z");
}
</style><path class="y7uiaqbhw"/>`,
		"fallback": "material-symbols:arrow-downward-outline-sharp",
	});
}

export default Component;
