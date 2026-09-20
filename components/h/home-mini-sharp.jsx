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
		"content": `<style>.vgpwkmyvu {
  fill: currentColor;
  d: path("M15.306 6.376q1.617.376 2.883 1.129q1.265.753 2.038 1.87T21 12H3q0-1.508.773-2.625t2.039-1.87t2.882-1.129T12 6t3.306.376M9 18q-2.215 0-3.87-1.416Q3.475 15.167 3.108 13h17.784q-.367 2.167-2.022 3.584Q17.216 18 15 18z");
}
</style><path class="vgpwkmyvu"/>`,
		"fallback": "material-symbols-light:home-mini-sharp",
	});
}

export default Component;
