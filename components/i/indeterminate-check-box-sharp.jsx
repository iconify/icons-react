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
		"content": `<style>.hqvutybue {
  fill: currentColor;
  d: path("M7.5 12.5h9v-1h-9zM4 20V4h16v16z");
}
</style><path class="hqvutybue"/>`,
		"fallback": "material-symbols-light:indeterminate-check-box-sharp",
	});
}

export default Component;
