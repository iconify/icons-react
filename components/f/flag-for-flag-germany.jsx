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
		"content": `<style>.w6jq81bgw {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M6.254 21h51.492q.368.864.679 1.756H5.575q.311-.892.679-1.756M32 60C20.083 60 9.888 52.514 5.853 42h52.294C54.112 52.514 43.917 60 32 60");
}
</style><path class="w6jq81bgw"/>`,
		"fallback": "emojione-monotone:flag-for-flag-germany",
	});
}

export default Component;
