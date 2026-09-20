import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mkqjbtbwh {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5V7h7V2zm5.5 8h4V6h-4zm4 1h-4v3h1.5a2.5 2.5 0 0 0 2.5-2.5zm0-6.5V5h-4V2h1.5A2.5 2.5 0 0 1 14 4.5M9 8H2v3.5A2.5 2.5 0 0 0 4.5 14H9z");
}
</style><path class="mkqjbtbwh"/>`,
		"fallback": "fluent:board-split-16-filled",
	});
}

export default Component;
