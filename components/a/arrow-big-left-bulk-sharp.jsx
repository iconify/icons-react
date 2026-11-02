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
		"content": `<style>.i_p0q-y_v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 9v6a1 1 0 0 1-1 1h-7v4a1.002 1.002 0 0 1-1.707.707l-8-8a1 1 0 0 1 0-1.414l8-8A1 1 0 0 1 13 4v4h7a1 1 0 0 1 1 1");
}
</style><path class="i_p0q-y_v"/>`,
		"fallback": "coolicons:arrow-big-left-bulk-sharp",
	});
}

export default Component;
