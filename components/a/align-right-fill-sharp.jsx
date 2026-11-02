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
		"content": `<style>.wix-smbpn {
  fill: currentColor;
  d: path("M21 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM4 3h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 10h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}
</style><path class="wix-smbpn"/>`,
		"fallback": "coolicons:align-right-fill-sharp",
	});
}

export default Component;
