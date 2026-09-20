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
		"content": `<style>.lf9o0gf1u {
  fill: currentColor;
  d: path("M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0M117.66 50.34A8 8 0 0 0 104 56v64H32a8 8 0 0 0 0 16h72v64a8 8 0 0 0 13.66 5.66l72-72a8 8 0 0 0 0-11.32Z");
}
</style><path class="lf9o0gf1u"/>`,
		"fallback": "ph:arrow-line-right-fill",
	});
}

export default Component;
