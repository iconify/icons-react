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
		"content": `<style>.d6ls5d49v {
  fill: currentColor;
  d: path("M132 16v32a4 4 0 0 1-8 0V16a4 4 0 0 1 8 0m44 44a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m-48 144a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0-120a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4M80 60a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m96 72a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4M32 108a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m48 48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m144-48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4");
}
</style><path class="d6ls5d49v"/>`,
		"fallback": "ph:google-podcasts-logo-thin",
	});
}

export default Component;
