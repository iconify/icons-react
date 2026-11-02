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
		"content": `<style>.j8nblncxb {
  fill: currentColor;
  d: path("m17.707 17.707l-4 4a2.414 2.414 0 0 1-3.414 0l-8-8a2.414 2.414 0 0 1 0-3.414l8-8a2.414 2.414 0 0 1 3.414 0l8 8a2.414 2.414 0 0 1 0 3.414ZM15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="j8nblncxb"/>`,
		"fallback": "coolicons:diamond-minus-fill",
	});
}

export default Component;
