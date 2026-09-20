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
		"content": `<style>.gx6uv7b0h {
  fill: currentColor;
  d: path("M10 13.077L14.616 10L10 6.923zm-7 7V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z");
}
</style><path class="gx6uv7b0h"/>`,
		"fallback": "material-symbols-light:auto-read-play-outline-sharp",
	});
}

export default Component;
