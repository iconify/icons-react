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
		"content": `<style>.xk-bjjjtg {
  fill: currentColor;
  d: path("M4 10c-.588 0-1.136.169-1.599.461l2.25-5.249A2 2 0 0 1 6.489 4h7.104c.742 0 1.43.41 1.763 1.088c.544 1.106 1.53 3.207 2.333 5.432A3 3 0 0 0 16 10zm12 1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H3.987A2 2 0 0 1 2 14v-1a2 2 0 0 1 2-2zm-.5 3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="xk-bjjjtg"/>`,
		"fallback": "fluent:hard-drive-20-filled",
	});
}

export default Component;
