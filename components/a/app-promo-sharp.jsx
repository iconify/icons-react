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
		"content": `<style>.mu52nffnb {
  fill: currentColor;
  d: path("m16 11l-4 4l-4-4l1.4-1.4l1.6 1.55V7h2v4.15l1.6-1.55zm-6 9h4v-1h-4zm-5 3V1h14v22zm2-7h10V6H7z");
}
</style><path class="mu52nffnb"/>`,
		"fallback": "material-symbols:app-promo-sharp",
	});
}

export default Component;
