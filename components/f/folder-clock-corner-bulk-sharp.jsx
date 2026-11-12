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

.ux62gzu1d {
  d: path("M11 16.998a6 6 0 1 1 12-.004a6 6 0 0 1-12 .008V17ZM13 17a4 4 0 1 0 8 0a4 4 0 0 0-8 0m3-2a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Z");
}

.ziwln3kxj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h7c.265 0 .52.105.707.293L12.414 5H21a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="ziwln3kxj"/><path class="ux62gzu1d"/></g>`,
		"fallback": "coolicons:folder-clock-corner-bulk-sharp",
	});
}

export default Component;
