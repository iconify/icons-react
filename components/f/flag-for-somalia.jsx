import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.az9gfw40b {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m9.724 44.022L32 39.097l-9.724 6.926l3.672-11.259l-9.682-6.976l11.99-.034L32 16.522l3.743 11.231l11.99.034l-9.686 6.976z");
}
</style><path class="az9gfw40b"/>`,
		"fallback": "emojione-monotone:flag-for-somalia",
	});
}

export default Component;
