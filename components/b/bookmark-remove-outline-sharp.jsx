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
		"content": `<style>.tk6z8l4hw {
  fill: currentColor;
  d: path("M20 7h-5V6h5zm-8 9.917L6 19.5V4h7v1H7v12.95l5-2.15l5 2.15V11h1v8.5zM7 5h6z");
}
</style><path class="tk6z8l4hw"/>`,
		"fallback": "material-symbols-light:bookmark-remove-outline-sharp",
	});
}

export default Component;
