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
		"content": `<style>.w5-fq_bdx {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.788 22.165h52.425A27.9 27.9 0 0 1 60 32c0 3.459-.635 6.771-1.787 9.833H5.787A27.9 27.9 0 0 1 4 32c0-3.46.635-6.773 1.788-9.835");
}
</style><path class="w5-fq_bdx"/>`,
		"fallback": "emojione-monotone:flag-for-gabon",
	});
}

export default Component;
