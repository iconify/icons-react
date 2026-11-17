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
		"content": `<style>.beq8y8bed {
  fill: currentColor;
  d: path("M9 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3M4 9v10a1 1 0 0 0 1 1h10a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0m7 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="beq8y8bed"/>`,
		"fallback": "coolicons:copy-minus-fill",
	});
}

export default Component;
