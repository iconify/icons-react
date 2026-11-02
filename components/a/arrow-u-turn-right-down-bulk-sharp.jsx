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
		"content": `<style>.t_yfa8b4m {
  fill: currentColor;
  d: path("m14.293 21.707l-4-4a.999.999 0 1 1 1.414-1.414L14 18.586V4H6v9a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><path class="t_yfa8b4m"/>`,
		"fallback": "coolicons:arrow-u-turn-right-down-bulk-sharp",
	});
}

export default Component;
