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
		"content": `<style>.csy7b2pql {
  fill: currentColor;
  d: path("m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v84a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Zm-52 67a56 56 0 0 0-50.65 32.09A40 40 0 0 0 60 236h48a56 56 0 0 0 0-112m0 88H60a16 16 0 0 1-6.54-30.6a12 12 0 0 0 22.67-4.32a33 33 0 0 1 .92-5.3c.12-.36.22-.72.31-1.09A32 32 0 1 1 108 212");
}
</style><path class="csy7b2pql"/>`,
		"fallback": "ph:file-cloud-bold",
	});
}

export default Component;
