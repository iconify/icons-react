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
		"content": `<style>.zw4pcbblw {
  fill: currentColor;
  d: path("M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z");
}
</style><path class="zw4pcbblw"/>`,
		"fallback": "material-symbols:arrow-back-ios-new-outline-sharp",
	});
}

export default Component;
