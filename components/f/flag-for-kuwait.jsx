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
		"content": `<style>.knep_bc_q {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.834 39.834L12.21 51.79a28 28 0 0 1-1.348-1.458l9.304-9.327v-18.01l-9.297-9.334a28 28 0 0 1 1.341-1.451l9.956 9.957h36.047C59.365 25.228 60 28.541 60 32s-.635 6.771-1.787 9.834z");
}
</style><path class="knep_bc_q"/>`,
		"fallback": "emojione-monotone:flag-for-kuwait",
	});
}

export default Component;
