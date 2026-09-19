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
		"content": `<style>.r2e2o-fby {
  fill: currentColor;
  d: path("M2.76 2.49L1.49 3.76L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72l1.27-1.27zM7 19V9.27L16.73 19zM17 5v9.17l2 2V3c0-1.1-.9-2-2-2H7c-.85 0-1.58.54-1.87 1.3L7.83 5z");
}
</style><path class="r2e2o-fby"/>`,
		"fallback": "ic:baseline-mobile-off",
	});
}

export default Component;
