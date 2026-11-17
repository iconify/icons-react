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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jpf0ii6wv {
  d: path("M13.01 6a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2ZM2 21v-5.81a5 5 0 0 1 1.707-3.763l1.134-.992a4.8 4.8 0 0 1 6.318 0l1.134.992A5 5 0 0 1 14 15.19V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m10-1v-4.81a3 3 0 0 0-1.024-2.258l-1.135-.992a2.796 2.796 0 0 0-3.682 0l-1.135.992A3 3 0 0 0 4 15.19V20Zm5.01-10a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}

.vmxioje8u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 22a1 1 0 0 1-1-1v-5.81a3 3 0 0 0-1.024-2.258l-2.635-2.304A1 1 0 0 1 8 9.875V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v14a1 1 0 0 1-1 1Z");
}
</style><g class="cuyn6tgcc"><path class="vmxioje8u"/><path class="jpf0ii6wv"/></g>`,
		"fallback": "coolicons:houses-bulk-round",
	});
}

export default Component;
