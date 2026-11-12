import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uat84lbex {
  fill: currentColor;
  d: path("M20.293 2.293a.999.999 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414ZM17 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-4.293.293l6 6a1 1 0 0 1 0 1.414L16.414 15L9 7.586l2.293-2.293a1 1 0 0 1 1.414 0M21 7a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2ZM7.586 9L15 16.414l-.293.293A1 1 0 0 1 14 17h-2.586l-4.707 4.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414L7 12.586V10c0-.265.105-.52.293-.707Z");
}
</style><path class="uat84lbex"/>`,
		"fallback": "coolicons:flashlight-on-fill-sharp",
	});
}

export default Component;
