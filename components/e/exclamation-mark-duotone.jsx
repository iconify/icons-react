import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.hidfxz0es {
  d: path("M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uxuixyb2z {
  d: path("M144 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16-40a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v104a8 8 0 0 0 8 8");
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="uxuixyb2z"/></g>`,
		"fallback": "ph:exclamation-mark-duotone",
	});
}

export default Component;
