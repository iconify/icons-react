import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a9s32qbql {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m13.993 3.434l7.671 6.819a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083L20 11.476V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l2-1.778v-.001l5.671-5.04a3 3 0 0 1 3.986 0");
}
</style><path class="a9s32qbql"/>`,
		"fallback": "coolicons:house-alt-3-bulk",
	});
}

export default Component;
