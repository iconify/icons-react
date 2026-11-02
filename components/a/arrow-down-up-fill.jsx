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
		"content": `<style>.tj3yo8bxf {
  fill: currentColor;
  d: path("m7.293 19.707l-4-4a.999.999 0 1 1 1.414-1.414L7 16.586V5a1 1 0 0 1 2 0v11.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0M17 7.414V19a1 1 0 0 1-2 0V7.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="tj3yo8bxf"/>`,
		"fallback": "coolicons:arrow-down-up-fill",
	});
}

export default Component;
