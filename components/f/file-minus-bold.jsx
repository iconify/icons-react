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
		"content": `<style>.mt-qmnbcn {
  fill: currentColor;
  d: path("m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm104-60a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12");
}
</style><path class="mt-qmnbcn"/>`,
		"fallback": "ph:file-minus-bold",
	});
}

export default Component;
