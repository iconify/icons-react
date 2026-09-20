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
		"content": `<style>.hij7phbrp {
  fill: currentColor;
  d: path("M8.539 20v-5.808H4L12 5l8 9.192h-4.538V20z");
}
</style><path class="hij7phbrp"/>`,
		"fallback": "material-symbols-light:arrow-shape-up-sharp",
	});
}

export default Component;
