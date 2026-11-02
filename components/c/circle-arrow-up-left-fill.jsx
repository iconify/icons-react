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
		"content": `<style>.bcflwt4lk {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-2a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.586l4.293 4.293a.999.999 0 1 0 1.414-1.414L11.414 10Z");
}
</style><path class="bcflwt4lk"/>`,
		"fallback": "coolicons:circle-arrow-up-left-fill",
	});
}

export default Component;
