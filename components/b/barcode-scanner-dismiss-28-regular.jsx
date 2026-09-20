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
		"content": `<style>.wb1p6cc8v {
  fill: currentColor;
  d: path("M20.5 13a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M2.754 19a.75.75 0 0 1 .75.75v1.5a2.25 2.25 0 0 0 2.25 2.25H7.25a.75.75 0 0 1 0 1.5H5.754a3.75 3.75 0 0 1-3.75-3.75v-1.5a.75.75 0 0 1 .75-.75m21.1-2.854a.5.5 0 0 0-.707 0L20.5 18.793l-2.646-2.646a.5.5 0 1 0-.707.707l2.646 2.646l-2.646 2.646a.5.5 0 1 0 .707.707l2.646-2.646l2.646 2.646a.5.5 0 1 0 .707-.707L21.208 19.5l2.646-2.646a.5.5 0 0 0 0-.707M7.253 8a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V8.75a.75.75 0 0 1 .75-.75m4.5 0a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V8.75a.75.75 0 0 1 .75-.75m4.5 0a.75.75 0 0 1 .75.75v4.114a7.5 7.5 0 0 0-1.5 1.043V8.75a.75.75 0 0 1 .75-.75m4.5 0a.75.75 0 0 1 .75.75v3.318a7.6 7.6 0 0 0-1.5-.05V8.75a.75.75 0 0 1 .75-.75M7.25 3a.75.75 0 0 1 0 1.5H5.754a2.25 2.25 0 0 0-2.25 2.25v1.5a.75.75 0 0 1-1.5 0v-1.5A3.75 3.75 0 0 1 5.754 3zm15.001 0a3.75 3.75 0 0 1 3.75 3.75v1.5a.75.75 0 0 1-1.5 0v-1.5a2.25 2.25 0 0 0-2.25-2.25H20.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="wb1p6cc8v"/>`,
		"fallback": "fluent:barcode-scanner-dismiss-28-regular",
	});
}

export default Component;
