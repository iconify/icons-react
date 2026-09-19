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
		"content": `<style>.cbw0tn9nz {
  fill: currentColor;
  d: path("m22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99zm-7-4.5l5.5 5.5H15z");
}
</style><path class="cbw0tn9nz"/>`,
		"fallback": "ic:baseline-note",
	});
}

export default Component;
