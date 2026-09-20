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
		"content": `<style>.oprhzeb7h {
  fill: currentColor;
  d: path("M19.904 16.616L12.98 12l6.923-4.615zm-8.885 0L4.096 12l6.923-4.615zm-1-1.866v-5.5L5.89 12zm8.885 0v-5.5L14.773 12z");
}
</style><path class="oprhzeb7h"/>`,
		"fallback": "material-symbols-light:fast-rewind-outline-sharp",
	});
}

export default Component;
