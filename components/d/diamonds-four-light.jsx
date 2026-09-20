import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l6lqvp2yc {
  fill: currentColor;
  d: path("M123.76 108.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48ZM128 32.49L159.51 64L128 95.51L96.49 64Zm4.24 115.27a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48ZM128 223.51L96.49 192L128 160.49L159.51 192Zm108.24-99.75l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M192 159.51L160.49 128L192 96.49L223.51 128Zm-83.76-35.75l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M64 159.51L32.49 128L64 96.49L95.51 128Z");
}
</style><path class="l6lqvp2yc"/>`,
		"fallback": "ph:diamonds-four-light",
	});
}

export default Component;
