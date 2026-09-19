import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y6ekde1_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.832 32.384l-1.664 5.304m-8.882-5.116l-1.663 5.304m20.758.684l-1.663 5.305M26.012 30.2l1.664-5.305l3.182.998l-2.661 8.487l6.365 1.996l4.99-15.912l-4.243-1.331l1.664-5.304l-5.305-1.664l1.664-5.304l-6.365-1.996l-1.664 5.304L20 8.506l-1.663 5.304l-4.244-1.331l-4.99 15.912l6.365 1.997l2.661-8.487l3.183.998l-1.664 5.304z");
}
</style><path class="y6ekde1_p"/>`,
		"fallback": "arcticons:hvv-switch",
	});
}

export default Component;
