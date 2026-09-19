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
		"content": `<style>.gm294eq9o {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.833 56.213V5.787A27.9 27.9 0 0 1 32 4c3.459 0 6.771.635 9.834 1.787v52.426A27.9 27.9 0 0 1 32 60a27.9 27.9 0 0 1-9.833-1.787");
}
</style><path class="gm294eq9o"/>`,
		"fallback": "emojione-monotone:flag-for-flag-belgium",
	});
}

export default Component;
