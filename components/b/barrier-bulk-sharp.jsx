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

.ehawpkh-g {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1");
}

.iy72ebb3v {
  d: path("M9.707 12.293a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414Zm6 0a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414Zm6 0a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414ZM6 17h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-3a1 1 0 0 1 2 0Zm14 0h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="ehawpkh-g"/><path class="iy72ebb3v"/></g>`,
		"fallback": "coolicons:barrier-bulk-sharp",
	});
}

export default Component;
