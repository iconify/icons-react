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
		"content": `<style>.fqq8h5bkf {
  fill: currentColor;
  d: path("M7.5 16.616V7.385h7.692v1H8.5v7.23h6V12.5h-2.384v-1H15.5v5.116z");
}
</style><path class="fqq8h5bkf"/>`,
		"fallback": "material-symbols-light:g-mobiledata-sharp",
	});
}

export default Component;
