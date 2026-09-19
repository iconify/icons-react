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
		"content": `<style>.k3zhr6bur {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M17.148 55.72q-.363-.225-.718-.46l42.34-15.053a28 28 0 0 1-6.652 11.238zm39.291-37.362L14.975 54L36.121 4.306c8.734 1.294 16.162 6.636 20.318 14.052");
}
</style><path class="k3zhr6bur"/>`,
		"fallback": "emojione-monotone:flag-for-seychelles",
	});
}

export default Component;
