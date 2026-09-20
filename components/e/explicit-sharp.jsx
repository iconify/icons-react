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
		"content": `<style>.g8hgn5bau {
  fill: currentColor;
  d: path("M9.5 16.5h5v-1h-4v-3h4v-1h-4v-3h4v-1h-5zM4 20V4h16v16z");
}
</style><path class="g8hgn5bau"/>`,
		"fallback": "material-symbols-light:explicit-sharp",
	});
}

export default Component;
