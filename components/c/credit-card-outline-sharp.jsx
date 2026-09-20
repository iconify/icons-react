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
		"content": `<style>.zp7_wulai {
  fill: currentColor;
  d: path("M3 19V5h18v14zM4 8.808h16V6H4zM4 18h16v-6.808H4zm0 0V6z");
}
</style><path class="zp7_wulai"/>`,
		"fallback": "material-symbols-light:credit-card-outline-sharp",
	});
}

export default Component;
