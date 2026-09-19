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
		"content": `<style>.xszgv7twv {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.75 34.917h-9.833v9.833h-9.834v-9.833H17.25v-9.834h9.833V17.25h9.834v9.833h9.833z");
}
</style><path class="xszgv7twv"/>`,
		"fallback": "emojione-monotone:flag-for-switzerland",
	});
}

export default Component;
