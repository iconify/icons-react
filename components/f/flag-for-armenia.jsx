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
		"content": `<style>.qwdwy_bps {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.787 22.167h52.426q.369.983.664 2H5.123q.296-1.017.664-2M32 60c-11.601 0-21.575-7.092-25.818-17.167h51.636C53.574 52.908 43.601 60 32 60");
}
</style><path class="qwdwy_bps"/>`,
		"fallback": "emojione-monotone:flag-for-armenia",
	});
}

export default Component;
