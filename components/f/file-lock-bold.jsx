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
		"content": `<style>.hfyshzbno {
  fill: currentColor;
  d: path("M120 168h-4v-4a32 32 0 0 0-64 0v4h-4a12 12 0 0 0-12 12v44a12 12 0 0 0 12 12h72a12 12 0 0 0 12-12v-44a12 12 0 0 0-12-12m-44-4a8 8 0 0 1 16 0v4H76Zm32 48H60v-20h48ZM216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-32a12 12 0 0 0 0 24h36a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Z");
}
</style><path class="hfyshzbno"/>`,
		"fallback": "ph:file-lock-bold",
	});
}

export default Component;
