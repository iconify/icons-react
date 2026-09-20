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
		"content": `<style>.x6cuowbwc {
  fill: currentColor;
  d: path("M238 80a38 38 0 0 0-38-38H48a38 38 0 0 0-14 73.32V200a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-84.68A38.07 38.07 0 0 0 238 80M46 200v-82h2a6 6 0 0 0 0-12a26 26 0 0 1 0-52h96a26 26 0 0 1 0 52a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2m154-94a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2h-42.16a15 15 0 0 0 .16-2v-84.68A38 38 0 0 0 171.68 54H200a26 26 0 0 1 0 52");
}
</style><path class="x6cuowbwc"/>`,
		"fallback": "ph:bread-light",
	});
}

export default Component;
