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
		"content": `<style>.cmm2qabry {
  d: path("M6.01 3a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Zm-12 5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Zm-12 5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ht51h8bgs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 18h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="ht51h8bgs"/><path class="cmm2qabry"/></g>`,
		"fallback": "coolicons:dialpad-bulk-sharp",
	});
}

export default Component;
