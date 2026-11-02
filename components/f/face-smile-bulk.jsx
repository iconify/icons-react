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

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}

.v90ml2bjf {
  d: path("M9.01 8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2Zm-6.303 5.293a4.656 4.656 0 0 0 6.586 0a1 1 0 1 1 1.414 1.414a6.653 6.653 0 0 1-9.414 0a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="v90ml2bjf"/></g>`,
		"fallback": "coolicons:face-smile-bulk",
	});
}

export default Component;
