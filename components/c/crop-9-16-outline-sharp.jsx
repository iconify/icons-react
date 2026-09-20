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
		"content": `<style>.m1sr06b6h {
  fill: currentColor;
  d: path("M8 20V4h8v16zM9 5v14h6V5zm0 14V5z");
}
</style><path class="m1sr06b6h"/>`,
		"fallback": "material-symbols-light:crop-9-16-outline-sharp",
	});
}

export default Component;
