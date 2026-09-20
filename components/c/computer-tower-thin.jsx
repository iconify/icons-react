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
		"content": `<style>.u0y0v9vsy {
  fill: currentColor;
  d: path("M164 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-60v176a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Zm-68 132a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="u0y0v9vsy"/>`,
		"fallback": "ph:computer-tower-thin",
	});
}

export default Component;
