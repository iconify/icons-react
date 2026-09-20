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
		"content": `<style>.rm2-ncjsp {
  fill: currentColor;
  d: path("M8 20V4h10v5h4v11zm-6 1h5V8H2zm8-12h6V6h-6zm0 8h4v-5h-4zm5-3h2v-2h-2zm3 0h2v-2h-2zm-3 3h2v-2h-2zm3 0h2v-2h-2z");
}
</style><path class="rm2-ncjsp"/>`,
		"fallback": "material-symbols:fax-sharp",
	});
}

export default Component;
