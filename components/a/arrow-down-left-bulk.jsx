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
		"content": `<style>.e7-8rccxv {
  fill: currentColor;
  d: path("M6 17v-7a1 1 0 0 1 2 0v4.586l8.293-8.293a.999.999 0 1 1 1.414 1.414L9.414 16H14a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1");
}
</style><path class="e7-8rccxv"/>`,
		"fallback": "coolicons:arrow-down-left-bulk",
	});
}

export default Component;
