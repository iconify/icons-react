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
		"content": `<style>.nuxp-hbap {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.699 22.392a28 28 0 0 1 1.74-3.823L45.433 56.56a28 28 0 0 1-3.824 1.741zM18.568 7.439a28 28 0 0 1 3.823-1.74L58.3 41.608a28 28 0 0 1-1.74 3.823z");
}
</style><path class="nuxp-hbap"/>`,
		"fallback": "emojione-monotone:flag-for-flag-trinidad-and-tobago",
	});
}

export default Component;
