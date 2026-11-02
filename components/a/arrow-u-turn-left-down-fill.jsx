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
		"content": `<style>.fmoba_wbh {
  fill: currentColor;
  d: path("m8.293 21.707l-4-4a.999.999 0 1 1 1.414-1.414L8 18.586V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1h-6a.997.997 0 0 0-1 1v13.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><path class="fmoba_wbh"/>`,
		"fallback": "coolicons:arrow-u-turn-left-down-fill",
	});
}

export default Component;
