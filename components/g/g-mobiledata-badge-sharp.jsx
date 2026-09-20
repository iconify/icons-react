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
		"content": `<style>.bk3jgtb_w {
  fill: currentColor;
  d: path("M8.5 16.5h7v-5h-2.615v1H14.5v3h-5v-7h6v-1h-7zM4 20V4h16v16z");
}
</style><path class="bk3jgtb_w"/>`,
		"fallback": "material-symbols-light:g-mobiledata-badge-sharp",
	});
}

export default Component;
