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
		"content": `<style>.isfc0pbjg {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-.824-.824A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1V5c0-.164.04-.325.117-.469L1.293 2.707a.999.999 0 1 1 1.414-1.414M15 3a1 1 0 0 1 2 0v1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0v-4h-4.757l-6-6H15Zm-6.414 7H5v10h13.586Z");
}
</style><path class="isfc0pbjg"/>`,
		"fallback": "coolicons:calendar-off-fill-sharp",
	});
}

export default Component;
