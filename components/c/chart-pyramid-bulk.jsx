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
		"content": `<style>.a-vlnry1x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m16.894 10.553l4 8c.181.356.274.75.273 1.149C21.164 20.924 20.265 22 19 22H5c-1.265 0-2.164-1.076-2.167-2.298a2.5 2.5 0 0 1 .273-1.149l7-14a2.116 2.116 0 0 1 3.788 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.j4qh7cpvq {
  d: path("M15 8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm3 6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="a-vlnry1x"/><path class="j4qh7cpvq"/></g>`,
		"fallback": "coolicons:chart-pyramid-bulk",
	});
}

export default Component;
