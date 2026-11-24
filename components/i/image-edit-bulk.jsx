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
		"content": `<style>.ajlvjgb5s {
  d: path("M11 9c0-.265.105-.52.293-.707l4-4a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 14 12h-2a1 1 0 0 1-1-1Zm-5.707 4.293a2.415 2.415 0 0 1 3.414 0l7 7a.999.999 0 1 1-1.414 1.414l-7-7a.415.415 0 0 0-.586 0l-3 3a.999.999 0 1 1-1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ye6cy2b2f {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z");
}
</style><g class="cuyn6tgcc"><path class="ye6cy2b2f"/><path class="ajlvjgb5s"/></g>`,
		"fallback": "coolicons:image-edit-bulk",
	});
}

export default Component;
