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
		"content": `<style>.oxttr686s {
  fill: currentColor;
  d: path("M11.192 13.808h5.616v-2.616h-5.616zm-.884.884v-4.384h7.384v4.384zM3 19V5h18v14zm1-1h16V8H4z");
}
</style><path class="oxttr686s"/>`,
		"fallback": "material-symbols-light:iframe-outline-sharp",
	});
}

export default Component;
