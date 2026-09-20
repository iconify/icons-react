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
		"content": `<style>.iwpay1b9d {
  fill: currentColor;
  d: path("M12 18L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-8L1 8l11-6l1 .55V7h8.175L23 8z");
}
</style><path class="iwpay1b9d"/>`,
		"fallback": "material-symbols:bookmark-stacks-sharp",
	});
}

export default Component;
