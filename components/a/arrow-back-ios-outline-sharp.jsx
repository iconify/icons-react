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
		"content": `<style>.z2u-dxewg {
  fill: currentColor;
  d: path("M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z");
}
</style><path class="z2u-dxewg"/>`,
		"fallback": "material-symbols:arrow-back-ios-outline-sharp",
	});
}

export default Component;
