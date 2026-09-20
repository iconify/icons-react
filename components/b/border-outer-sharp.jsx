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
		"content": `<style>.g2iqzxb8e {
  fill: currentColor;
  d: path("M5 19h14V5H5zm-1 1V4h16v16zm3.692-7.384v-1.231h1.231v1.23zm3.692 3.692v-1.231h1.231v1.23zm0-3.692v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm3.693 3.693v-1.231h1.23v1.23z");
}
</style><path class="g2iqzxb8e"/>`,
		"fallback": "material-symbols-light:border-outer-sharp",
	});
}

export default Component;
