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
		"content": `<style>.apxhlb0_u {
  fill: currentColor;
  d: path("m20.2 44.783l11.8-11.8l11.8 11.8l-11.8-23.6z");
}

.awxpj7xsq {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m11.8 42.783H17.25L32 15.283l14.75 29.5z");
}
</style><path class="apxhlb0_u"/><path class="awxpj7xsq"/>`,
		"fallback": "emojione-monotone:flag-for-st-lucia",
	});
}

export default Component;
