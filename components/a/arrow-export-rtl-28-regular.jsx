import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bo-1rxbdy {
  fill: currentColor;
  d: path("M25.25 5a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0v-16a.75.75 0 0 1 .75-.75M8.72 6.72a.75.75 0 1 1 1.06 1.06L4.56 13h16.686a.75.75 0 0 1 0 1.5H4.561l5.22 5.22a.75.75 0 0 1-1.061 1.06l-6.5-6.5a.75.75 0 0 1 0-1.06z");
}
</style><path class="bo-1rxbdy"/>`,
		"fallback": "fluent:arrow-export-rtl-28-regular",
	});
}

export default Component;
