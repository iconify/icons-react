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
		"content": `<style>.l7o1wcbpc {
  fill: currentColor;
  d: path("M2 16.289V7.711h4.77v8.577zm7.616 0V7.711h4.769v8.577zm7.615 0V7.711H22v8.577zM3 15.289h2.77V8.71H3zm15.423 0H21V8.71h-2.577z");
}
</style><path class="l7o1wcbpc"/>`,
		"fallback": "material-symbols-light:flex-no-wrap-sharp",
	});
}

export default Component;
