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
		"content": `<style>.c0zyyvvro {
  fill: currentColor;
  d: path("M112.15 122.36A36 36 0 0 0 90 58H32a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h62a40 40 0 0 0 18.15-75.64M38 70h52a24 24 0 0 1 0 48H38Zm56 116H38v-56h56a28 28 0 0 1 0 56m68-106a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6m38 26a46 46 0 1 0 36.8 73.61a6 6 0 0 0-9.6-7.21a34 34 0 0 1-60.67-14.4H240a6 6 0 0 0 6-6a46.06 46.06 0 0 0-46-46m-33.47 40a34 34 0 0 1 66.94 0Z");
}
</style><path class="c0zyyvvro"/>`,
		"fallback": "ph:behance-logo-light",
	});
}

export default Component;
