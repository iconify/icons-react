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
		"content": `<style>.h7c45m_bu {
  fill: currentColor;
  d: path("M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h6.461v1H7.616q-.231 0-.424.192T7 3.616V4.5h7.077v1H7v13h10v-2h1v3.885q0 .69-.462 1.152T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm11-6.212l-4.308-4.307l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708zM7 4.5V3zm0 15V21z");
}
</style><path class="h7c45m_bu"/>`,
		"fallback": "material-symbols-light:install-mobile-outline",
	});
}

export default Component;
