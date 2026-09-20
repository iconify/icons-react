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
		"content": `<style>.bydkv6rsh {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v2h-9v8h9v2zm8-3v-6h6v2l2-1.05v4.1L18 16v2z");
}
</style><path class="bydkv6rsh"/>`,
		"fallback": "material-symbols:camera-outdoor-sharp",
	});
}

export default Component;
