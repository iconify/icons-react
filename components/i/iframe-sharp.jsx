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
		"content": `<style>.yee9k2bcc {
  fill: currentColor;
  d: path("M10 15v-5h8v5zm-7 4V5h18v14zm1-1h16V8H4z");
}
</style><path class="yee9k2bcc"/>`,
		"fallback": "material-symbols-light:iframe-sharp",
	});
}

export default Component;
