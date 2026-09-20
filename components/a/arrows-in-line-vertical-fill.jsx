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
		"content": `<style>.p_i8qbxsf {
  fill: currentColor;
  d: path("M90.34 69.66A8 8 0 0 1 96 56h24V16a8 8 0 0 1 16 0v40h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0Zm43.32 84.68a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 200h24v40a8 8 0 0 0 16 0v-40h24a8 8 0 0 0 5.66-13.66ZM216 120H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="p_i8qbxsf"/>`,
		"fallback": "ph:arrows-in-line-vertical-fill",
	});
}

export default Component;
