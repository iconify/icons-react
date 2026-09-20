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
		"content": `<style>.k-vk3kt6y {
  fill: currentColor;
  d: path("M7.692 16.308V4H20v12.308zm1-1H19V5H8.692zM4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zM7.692 20v-1.23h1.231V20zm3.693 0v-1.23h1.23V20zm3.692 0v-1.23h1.23V20z");
}
</style><path class="k-vk3kt6y"/>`,
		"fallback": "material-symbols-light:flip-to-front-sharp",
	});
}

export default Component;
