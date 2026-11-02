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
		"content": `<style>.m-apdubfz {
  fill: currentColor;
  d: path("M6.218 12.005L7.719 6H6a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-.219l-.5 2h5.438l-.689-2.757A.998.998 0 0 1 15 4h3a3 3 0 0 1 3 3a1 1 0 0 1-2 0a1 1 0 0 0-1-1h-1.719l.689 2.757v.001l.812 3.247a5 5 0 1 1-1.941.484L15.219 10H8.781l-.622 2.489a5 5 0 1 1-1.941-.484M5 17a1 1 0 1 0 2 0a1 1 0 0 0-2 0m12 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="m-apdubfz"/>`,
		"fallback": "coolicons:bike-fill",
	});
}

export default Component;
