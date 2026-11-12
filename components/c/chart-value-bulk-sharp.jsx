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

.d4d_b1bjs {
  d: path("M7.293 8.293A1 1 0 0 1 9 9v6a1 1 0 0 1-2 0v-3.586l-.293.293a.999.999 0 1 1-1.414-1.414ZM19 9v4a1 1 0 0 1-2 0v-1.586l-4.293 4.293a.999.999 0 1 1-1.414-1.414L15.586 10H14a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1");
}

.m2dtcxzwn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="m2dtcxzwn"/><path class="d4d_b1bjs"/></g>`,
		"fallback": "coolicons:chart-value-bulk-sharp",
	});
}

export default Component;
