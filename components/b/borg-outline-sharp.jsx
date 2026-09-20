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
		"content": `<style>.fonng8qxd {
  fill: currentColor;
  d: path("M3 17.125V6.875L12 1.7l9 5.175v10.25L12 22.3zM8 16v-3H5v2.95l6 3.475V16zm0-8h3V4.575L5 8.05V11h3zm2 6h4v-4h-4zm6 2h-3v3.425l6-3.475V13h-3zm0-8v3h3V8.05l-6-3.475V8z");
}
</style><path class="fonng8qxd"/>`,
		"fallback": "material-symbols:borg-outline-sharp",
	});
}

export default Component;
