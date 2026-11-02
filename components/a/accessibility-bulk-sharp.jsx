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

.ypymhfb2x {
  d: path("M10.158 7.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558M12 11h5a1 1 0 0 1 0 2h-4v.586l2.707 2.707a.999.999 0 1 1-1.414 1.414L12 15.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L11 13.586V13H7a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="ypymhfb2x"/></g>`,
		"fallback": "coolicons:accessibility-bulk-sharp",
	});
}

export default Component;
