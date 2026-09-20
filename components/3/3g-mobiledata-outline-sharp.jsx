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
		"content": `<style>.kiq5gsbub {
  fill: currentColor;
  d: path("M3.5 16.5v-1h5v-3h-5v-1h5v-3h-5v-1h6v9zm17-5v5h-8v-9h8v1h-7v7h6v-3H17v-1z");
}
</style><path class="kiq5gsbub"/>`,
		"fallback": "material-symbols-light:3g-mobiledata-outline-sharp",
	});
}

export default Component;
