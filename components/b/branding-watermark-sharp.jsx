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
		"content": `<style>.dhm3sgb_q {
  fill: currentColor;
  d: path("M10.5 16.5h8v-5.692h-8zM3 19V5h18v14z");
}
</style><path class="dhm3sgb_q"/>`,
		"fallback": "material-symbols-light:branding-watermark-sharp",
	});
}

export default Component;
