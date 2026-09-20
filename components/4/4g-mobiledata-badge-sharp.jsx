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
		"content": `<style>.xzzqn_q6t {
  fill: currentColor;
  d: path("M13 17h7v-6h-3.5v2H18v2h-3V9h5V7h-7zm-5 0h2v-3h2v-2h-2V7H8v5H6V7H4v7h4zm-7 4V3h22v18z");
}
</style><path class="xzzqn_q6t"/>`,
		"fallback": "material-symbols:4g-mobiledata-badge-sharp",
	});
}

export default Component;
