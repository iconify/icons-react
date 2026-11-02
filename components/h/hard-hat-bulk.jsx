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
		"content": `<style>.bmu9nf3kz {
  d: path("M11 7.25V11a1 1 0 0 1-2 0V7.25a1 1 0 0 1 2 0M13 11V7.25a1 1 0 0 1 2 0V11a1 1 0 0 1-2 0M3 15h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.vhmodw5xx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 21H5a3 3 0 0 1-1-5.829V11a6.01 6.01 0 0 1 5-5.918V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.082A6.01 6.01 0 0 1 20 11v4.171A3.001 3.001 0 0 1 19 21");
}
</style><g class="cuyn6tgcc"><path class="vhmodw5xx"/><path class="bmu9nf3kz"/></g>`,
		"fallback": "coolicons:hard-hat-bulk",
	});
}

export default Component;
