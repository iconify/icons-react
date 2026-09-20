import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cijqtht3r {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5V5h4.5V3zm4 0v7H13V4.5A1.5 1.5 0 0 0 11.5 3zm4.5 8H8.5v2h3a1.5 1.5 0 0 0 1.5-1.5zm-5.5 2V6H3v5.5A1.5 1.5 0 0 0 4.5 13z");
}
</style><path class="cijqtht3r"/>`,
		"fallback": "fluent:board-16-regular",
	});
}

export default Component;
