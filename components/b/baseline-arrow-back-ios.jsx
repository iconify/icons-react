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
		"content": `<style>.qr3glibor {
  fill: currentColor;
  d: path("M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z");
}
</style><path class="qr3glibor"/>`,
		"fallback": "ic:baseline-arrow-back-ios",
	});
}

export default Component;
