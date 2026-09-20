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
		"content": `<style>.nrkxg7bqr {
  fill: currentColor;
  d: path("M190 136a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h10v-10a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6m-86-6H72a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m134-42v96a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14V88a14 14 0 0 1 14-14h18V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h36V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h18a14 14 0 0 1 14 14m-80-14h36V56a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2Zm-96 0h36V56a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2Zm164 14a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2Z");
}
</style><path class="nrkxg7bqr"/>`,
		"fallback": "ph:car-battery-light",
	});
}

export default Component;
