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
		"content": `<style>.hwnr1n-rc {
  fill: currentColor;
  d: path("M14 5h-1v1.066A7.5 7.5 0 0 1 18.634 10H5.366A7.51 7.51 0 0 1 11 6.066V5h-1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m6 8h1a1 1 0 0 1 0 2h-1v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3H3a1 1 0 0 1 0-2h1v-1h16Z");
}
</style><path class="hwnr1n-rc"/>`,
		"fallback": "coolicons:cooking-pot-fill",
	});
}

export default Component;
