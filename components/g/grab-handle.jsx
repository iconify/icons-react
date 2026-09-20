import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nj3d7zwml {
  fill: currentColor;
  d: path("M2.5 8a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2z");
}
</style><path class="nj3d7zwml"/>`,
		"fallback": "pepicons-pop:grab-handle",
	});
}

export default Component;
