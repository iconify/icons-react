import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oky9e2bta {
  fill: currentColor;
  d: path("M20.5 13a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M3 19a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h1a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1m17.5-4a.5.5 0 0 0-.5.5V19h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V20h3.5a.5.5 0 0 0 0-1H21v-3.5a.5.5 0 0 0-.5-.5M7 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m4.75 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1v3.738a7.5 7.5 0 0 0-2 1.407V9a1 1 0 0 1 1-1M21 8a1 1 0 0 1 1 1v3.15a7.5 7.5 0 0 0-2-.131V9a1 1 0 0 1 1-1M7 3a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v1a1 1 0 0 1-2 0V7a4 4 0 0 1 4-4zm15 0a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2h-1a1 1 0 1 1 0-2z");
}
</style><path class="oky9e2bta"/>`,
		"fallback": "fluent:barcode-scanner-add-28-filled",
	});
}

export default Component;
