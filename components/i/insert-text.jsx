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
		"content": `<style>.r-gjp6b3r {
  fill: currentColor;
  d: path("M11.5 16V9h-3V8h7v1h-3v7zm-9.115 5.616v-4.232H4V6.616H2.385V2.385h4.23V4h10.77V2.385h4.23v4.23H20v10.77h1.616v4.23h-4.232V20H6.616v1.616zM6.615 19h10.77v-1.616H19V6.616h-1.616V5H6.616v1.616H5v10.769h1.616z");
}
</style><path class="r-gjp6b3r"/>`,
		"fallback": "material-symbols-light:insert-text",
	});
}

export default Component;
