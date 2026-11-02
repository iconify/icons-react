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
		"content": `<style>.a6eefeb5z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 3h6a1 1 0 0 1 1 1v7h4a1.002 1.002 0 0 1 .707 1.707l-8 8a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 4 11h4V4a1 1 0 0 1 1-1");
}
</style><path class="a6eefeb5z"/>`,
		"fallback": "coolicons:arrow-big-down-bulk-sharp",
	});
}

export default Component;
