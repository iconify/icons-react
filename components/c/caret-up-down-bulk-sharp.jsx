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
		"content": `<style>.jbtiw3fzo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m7.293 9.293l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 11H8a1.002 1.002 0 0 1-.707-1.707m9.414 5.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8 13h8a1.002 1.002 0 0 1 .707 1.707");
}
</style><path class="jbtiw3fzo"/>`,
		"fallback": "coolicons:caret-up-down-bulk-sharp",
	});
}

export default Component;
