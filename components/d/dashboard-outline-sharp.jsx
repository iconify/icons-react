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
		"content": `<style>.lw4_dsbza {
  fill: currentColor;
  d: path("M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3");
}
</style><path class="lw4_dsbza"/>`,
		"fallback": "material-symbols-light:dashboard-outline-sharp",
	});
}

export default Component;
