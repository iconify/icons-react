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
		"content": `<style>.b7vhg8b6q {
  d: path("M13.158 7.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-4.865 3.072a1 1 0 0 1 1.414 0L14 14.586l2.293-2.293a1 1 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414L17 14.414l-2.293 2.293a1 1 0 0 1-1.414 0L9 12.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="b7vhg8b6q"/></g>`,
		"fallback": "coolicons:image-bulk-sharp",
	});
}

export default Component;
