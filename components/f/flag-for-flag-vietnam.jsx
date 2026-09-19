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
		"content": `<style>.lfbgqxu8c {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m9.724 43.767L32 38.847l-9.726 6.92l3.674-11.255l-9.682-7.183h12.102L32 16.267l3.739 11.063h11.994l-9.682 7.183z");
}
</style><path class="lfbgqxu8c"/>`,
		"fallback": "emojione-monotone:flag-for-flag-vietnam",
	});
}

export default Component;
