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
		"content": `<style>.x_wnvxb2i {
  fill: currentColor;
  d: path("M136 16v32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0m40 40a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-48 144a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0-120a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M80 56a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m96 72a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8M32 104a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m48 48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m144-48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8");
}
</style><path class="x_wnvxb2i"/>`,
		"fallback": "ph:google-podcasts-logo",
	});
}

export default Component;
