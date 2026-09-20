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
		"content": `<style>.i3gvhvb0m {
  fill: currentColor;
  d: path("M5 22v-3H2v-2h3v-4H2v-2h3V7H2V5h3V2h2v3h4V2h2v3h4V2h2v3h3v2h-3v4h3v2h-3v4h3v2h-3v3h-2v-3h-4v3h-2v-3H7v3zm2-5h4v-4H7zm6 0h4v-4h-4zm-6-6h4V7H7zm6 0h4V7h-4z");
}
</style><path class="i3gvhvb0m"/>`,
		"fallback": "material-symbols:grid-4x4",
	});
}

export default Component;
