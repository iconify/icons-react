import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r8dwc4bft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.258 13.708a.715.715 0 0 1-.706-.825C10.257 8.1 17.056 4.5 24 4.5s13.743 3.6 14.485 8.383a.715.715 0 0 1-.706.824zm27.576 24.588a.67.67 0 0 1 .65.779C37.789 43.482 30.955 43.5 24 43.5s-13.742 0-14.485-4.425a.67.67 0 0 1 .65-.779zM27.138 16.4v19.203m10.317 0l-7.904-9.601l7.904-9.552m-7.904 9.552h-2.413m-7.809 0a4.8 4.8 0 0 1 0 9.601h-7.874V16.4h7.874a4.8 4.8 0 0 1 0 9.602m0 0h-7.874");
}
</style><path class="r8dwc4bft"/>`,
		"fallback": "arcticons:burger-king",
	});
}

export default Component;
