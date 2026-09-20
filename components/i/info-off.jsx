import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

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

.fepf0accp {
  fill-rule: evenodd;
  d: path("M10 7a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2");
}

.yoyqhrpiu {
  d: path("M12 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="fepf0accp"/><path class="yoyqhrpiu"/></g>`,
		"fallback": "pepicons-pop:info-off",
	});
}

export default Component;
