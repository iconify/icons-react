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
		"content": `<style>.i1do82chx {
  fill: currentColor;
  d: path("M5 15h14V5H5zm-1 5V4h16v16z");
}
</style><path class="i1do82chx"/>`,
		"fallback": "material-symbols-light:dock-to-bottom-sharp",
	});
}

export default Component;
