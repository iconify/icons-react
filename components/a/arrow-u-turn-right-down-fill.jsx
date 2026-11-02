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
		"content": `<style>.vr_77c_ku {
  fill: currentColor;
  d: path("m14.293 21.707l-4-4a.999.999 0 1 1 1.414-1.414L14 18.586V5a.997.997 0 0 0-1-1H7a.997.997 0 0 0-1 1v8a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v13.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><path class="vr_77c_ku"/>`,
		"fallback": "coolicons:arrow-u-turn-right-down-fill",
	});
}

export default Component;
