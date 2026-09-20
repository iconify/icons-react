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
		"content": `<style>.j7s06dbso {
  fill: currentColor;
  d: path("M14.52 22h-4.116v-6.75h1.558v-4.5H3V4.5h2.923V3H19v4H5.923V5.5H4v4.25h8.962v5.5h1.557z");
}
</style><path class="j7s06dbso"/>`,
		"fallback": "material-symbols-light:imagesearch-roller-sharp",
	});
}

export default Component;
