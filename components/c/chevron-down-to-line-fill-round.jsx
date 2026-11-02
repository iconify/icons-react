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
		"content": `<style>.fbpay4bms {
  fill: currentColor;
  d: path("M6.707 6.293L12 11.586l5.293-5.293a.999.999 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a.999.999 0 1 1 1.414-1.414M18 16a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="fbpay4bms"/>`,
		"fallback": "coolicons:chevron-down-to-line-fill-round",
	});
}

export default Component;
