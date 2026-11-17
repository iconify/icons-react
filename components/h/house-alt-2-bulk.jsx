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

.rrho5ub6z {
  d: path("M3 22a1 1 0 0 1 0-2h6v-3a3 3 0 1 1 6 0v3h6a1 1 0 0 1 0 2Zm10-2v-3a1 1 0 0 0-2 0v3Z");
}

.ug7l67znt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 10.908c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1ZM14 17a2 2 0 1 0-4 0v4h4Z");
}
</style><g class="cuyn6tgcc"><path class="ug7l67znt"/><path class="rrho5ub6z"/></g>`,
		"fallback": "coolicons:house-alt-2-bulk",
	});
}

export default Component;
