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
		"content": `<style>.btlyoeb3o {
  d: path("M21 13h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 2 0v8h8a1 1 0 0 1 0 2M5.158 6.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558M17.01 6a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Zm-1.852 10.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}

.cuyn6tgcc {
  fill: currentColor;
}

.yqxcxg4xa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="yqxcxg4xa"/><path class="btlyoeb3o"/></g>`,
		"fallback": "coolicons:chart-heatmap-bulk-round",
	});
}

export default Component;
