import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hhteqwb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5v7.124m0 26.752V44.5M5.421 15.336l6.456 3.011m24.246 11.306l6.456 3.011m0-17.328l-6.456 3.011M11.877 29.653l-6.456 3.011");
}
</style><path class="hhteqwb-z"/>`,
		"fallback": "arcticons:dainik-bhaskar",
	});
}

export default Component;
