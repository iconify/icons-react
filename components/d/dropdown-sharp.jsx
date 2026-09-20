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
		"content": `<style>.u4a4eob2r {
  fill: currentColor;
  d: path("M12 12h6V6h-6zm-8 8V4h16v16z");
}
</style><path class="u4a4eob2r"/>`,
		"fallback": "material-symbols-light:dropdown-sharp",
	});
}

export default Component;
