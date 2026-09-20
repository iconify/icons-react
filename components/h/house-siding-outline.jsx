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
		"content": `<style>.s1vvtqbkq {
  fill: currentColor;
  d: path("M5.692 20V9.946L2.604 12.25L2 11.458L12 4l10.02 7.458l-.604.792l-3.089-2.304V20h-1v-3H6.692v3zm1-7.77h10.635V9.462H6.692zm0 3.77h10.635v-2.77H6.692zm.981-7.539h8.654L12 5.256z");
}
</style><path class="s1vvtqbkq"/>`,
		"fallback": "material-symbols-light:house-siding-outline",
	});
}

export default Component;
