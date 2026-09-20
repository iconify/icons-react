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
		"content": `<style>.tpn6yfdgu {
  fill: currentColor;
  d: path("m21 18.15l-2-2V8h-5V3H8v2.15l-2-2V3q0-.825.588-1.412T8 1h7l6 6zM8 17h6.2L8 10.8zm12.5 6.3L16.2 19H8q-.825 0-1.412-.587T6 17V8.8L.7 3.5l1.4-1.4l19.8 19.8zM4 23q-.825 0-1.412-.587T2 21V8h2v13h12v2z");
}
</style><path class="tpn6yfdgu"/>`,
		"fallback": "material-symbols:file-copy-off-outline",
	});
}

export default Component;
