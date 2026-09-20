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
		"content": `<style>.fw7igmbtw {
  fill: currentColor;
  d: path("M5.885 16.5h4.884v-1H6.885v-3h2.884v-1H6.885v-3h3.884v-1H5.885zm9 0h1.076l2.693-9h-1.039l-2.192 7.23l-2.192-7.23h-1.039zM2 20V4h20v16z");
}
</style><path class="fw7igmbtw"/>`,
		"fallback": "material-symbols-light:ev-mobiledata-badge-sharp",
	});
}

export default Component;
