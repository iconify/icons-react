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

.dk1ei-b4r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15.293 3.293a3.83 3.83 0 1 1 5.416 5.416a3.83 3.83 0 0 1-5.416-5.416");
}

.spdy1sbss {
  d: path("m16.338 9.45l-4.464 8.036a1 1 0 0 1-1.474.314l-3.306-2.48l-3.387 3.387a.999.999 0 1 1-1.414-1.414l4-4A1 1 0 0 1 7.6 13.2l3.083 2.312l4.116-7.41a3.83 3.83 0 1 1 1.539 1.348m.367-2.159l.002.001v.001a1.828 1.828 0 1 0-.002-.002");
}
</style><g class="cuyn6tgcc"><path class="dk1ei-b4r"/><path class="spdy1sbss"/></g>`,
		"fallback": "coolicons:chart-sparkline-bulk-round",
	});
}

export default Component;
