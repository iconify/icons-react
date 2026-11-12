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
		"content": `<style>.ymz-i5-5r {
  fill: currentColor;
  d: path("M3 2h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m6 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2m-8 2v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 2 0M3 8h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m18 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2M3 14h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m18 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2M3 20h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m6 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2");
}
</style><path class="ymz-i5-5r"/>`,
		"fallback": "coolicons:border-inner-fill-sharp",
	});
}

export default Component;
