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
		"content": `<style>.ru57o_t-s {
  fill: currentColor;
  d: path("M152 76h-28V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h28a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 96h-28a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h28Zm72-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0m-32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0");
}
</style><path class="ru57o_t-s"/>`,
		"fallback": "ph:arrow-fat-lines-left-thin",
	});
}

export default Component;
