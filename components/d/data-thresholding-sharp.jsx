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
		"content": `<style>.i4ios3ouv {
  fill: currentColor;
  d: path("M6.725 16L5 17.725V19h.85l3-3zm3.95 0l-3 3H9.8l3-3zm3.725 0l-3 3h2.125l3-3zm3.75 0l-3 3h2.125L19 17.275V16zm-1.8-9.5l-3.675 3.675l-2-2L6.25 12.6l1.4 1.4l3.025-3l2 2l5.075-5.1zM3 21V3h18v18z");
}
</style><path class="i4ios3ouv"/>`,
		"fallback": "material-symbols:data-thresholding-sharp",
	});
}

export default Component;
