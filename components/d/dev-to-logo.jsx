import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.evu5o58ox {
  fill: currentColor;
  d: path("M232 56H24A16 16 0 0 0 8 72v112a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16m0 128H24V72h208zm-104-80v16h8a8 8 0 0 1 0 16h-8v16h16a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16Zm87.7-5.83l-18 64a8 8 0 0 1-15.4 0l-18-64a8 8 0 0 1 15.4-4.34l10.3 36.62l10.3-36.62a8 8 0 1 1 15.4 4.34M64 88h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32v-16a32 32 0 0 0-32-32m16 48a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16Z");
}
</style><path class="evu5o58ox"/>`,
		"fallback": "ph:dev-to-logo",
	});
}

export default Component;
