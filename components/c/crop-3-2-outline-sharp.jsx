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
		"content": `<style>.zu62vsfal {
  fill: currentColor;
  d: path("M3 18V6h18v12zm2-2h14V8H5zm0 0V8z");
}
</style><path class="zu62vsfal"/>`,
		"fallback": "material-symbols:crop-3-2-outline-sharp",
	});
}

export default Component;
