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
		"content": `<style>.d5n3g7bvh {
  fill: currentColor;
  d: path("M90.66 67L22 128l68.64 61a4 4 0 0 1-5.32 6l-72-64a4 4 0 0 1 0-6l72-64a4 4 0 1 1 5.32 6Zm152 58l-72-64a4 4 0 1 0-5.32 6L234 128l-68.64 61a4 4 0 0 0 5.32 6l72-64a4 4 0 0 0 0-6Z");
}
</style><path class="d5n3g7bvh"/>`,
		"fallback": "ph:code-simple-thin",
	});
}

export default Component;
