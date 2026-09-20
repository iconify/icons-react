import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oq3atevez {
  fill: currentColor;
  d: path("m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-24a12 12 0 0 0 0 24h28a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Zm-96 83H48a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m80 7.44V208a12 12 0 0 1-24 0v-20.56l-18.18-29.08a12 12 0 0 1 20.36-12.72l9.82 15.72l9.82-15.72a12 12 0 0 1 20.36 12.72Z");
}
</style><path class="oq3atevez"/>`,
		"fallback": "ph:file-py-bold",
	});
}

export default Component;
