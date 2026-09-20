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
		"content": `<style>.sozl0zb7n {
  fill: currentColor;
  d: path("m237.66 133.66l-96 96A8 8 0 0 1 128 224v-40H48a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80V32a8 8 0 0 1 13.66-5.66l96 96a8 8 0 0 1 0 11.32");
}
</style><path class="sozl0zb7n"/>`,
		"fallback": "ph:arrow-fat-right-fill",
	});
}

export default Component;
