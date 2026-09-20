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
		"content": `<style>.nu_r9fbhm {
  fill: currentColor;
  d: path("M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z");
}
</style><path class="nu_r9fbhm"/>`,
		"fallback": "material-symbols:arrow-forward-ios-outline-sharp",
	});
}

export default Component;
