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
		"content": `<style>.vrdtwjrtl {
  fill: currentColor;
  d: path("M5 18V6zm1-9v6h3v-1.5H7.5v-3h2v.5H11V9zm7 0v3h1.5v-1.5h2v.5H18V9zM3 20V4h18v8h-2V6H5v12h4v2zm8 2v-8h11v8zm2-2h7v-4h-7z");
}
</style><path class="vrdtwjrtl"/>`,
		"fallback": "material-symbols:closed-caption-display-outline-sharp",
	});
}

export default Component;
