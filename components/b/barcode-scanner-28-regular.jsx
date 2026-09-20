import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hqgfpbbmc {
  fill: currentColor;
  d: path("M2.754 19a.75.75 0 0 1 .75.75v1.5a2.25 2.25 0 0 0 2.25 2.25H7.25a.75.75 0 0 1 0 1.5H5.754a3.75 3.75 0 0 1-3.75-3.75v-1.5a.75.75 0 0 1 .75-.75m22.497 0a.75.75 0 0 1 .75.75v1.5a3.75 3.75 0 0 1-3.75 3.75H20.75a.75.75 0 0 1 0-1.5h1.501a2.25 2.25 0 0 0 2.25-2.25v-1.5a.75.75 0 0 1 .75-.75M7.254 8a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V8.75a.75.75 0 0 1 .75-.75m4.5 0a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V8.75a.75.75 0 0 1 .75-.75m4.5 0a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V8.75a.75.75 0 0 1 .75-.75m4.5 0a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V8.75a.75.75 0 0 1 .75-.75M7.25 3a.75.75 0 0 1 0 1.5H5.754a2.25 2.25 0 0 0-2.25 2.25v1.5a.75.75 0 0 1-1.5 0v-1.5A3.75 3.75 0 0 1 5.754 3zm15.001 0a3.75 3.75 0 0 1 3.75 3.75v1.5a.75.75 0 0 1-1.5 0v-1.5a2.25 2.25 0 0 0-2.25-2.25H20.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="hqgfpbbmc"/>`,
		"fallback": "fluent:barcode-scanner-28-regular",
	});
}

export default Component;
