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
		"content": `<style>.hgde5qbun {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 20a1 1 0 0 1-.707-.293l-7-7a1 1 0 0 1 0-1.414l7-7A1 1 0 0 1 11 4h9a1.002 1.002 0 0 1 .707 1.707L14.414 12l6.293 6.293A1 1 0 0 1 20 20Z");
}
</style><path class="hgde5qbun"/>`,
		"fallback": "coolicons:arrow-badge-left-bulk-sharp",
	});
}

export default Component;
