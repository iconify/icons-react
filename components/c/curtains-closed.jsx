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
		"content": `<style>.rma9l8b8a {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm7.75-1h2.5V5h-2.5z");
}
</style><path class="rma9l8b8a"/>`,
		"fallback": "material-symbols-light:curtains-closed",
	});
}

export default Component;
