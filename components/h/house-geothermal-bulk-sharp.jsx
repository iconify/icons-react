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
		"content": `<style>.a0e3x4k9z {
  d: path("M17.992 6.914a1 1 0 0 1 .341.753V15a1 1 0 0 1-1 1H13v2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1h5v-2H6.667a1 1 0 0 1-1-1V7.667a1 1 0 0 1 .341-.753l5.333-4.667c.378-.329.94-.329 1.318 0ZM12 14h4.333V8.12L12 4.329L7.667 8.12V14Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.y0bsh1b5l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.659 2.247l5.333 4.667a1 1 0 0 1 .341.753V15a1 1 0 0 1-1 1H6.667a1 1 0 0 1-1-1V7.667a1 1 0 0 1 .341-.753l5.333-4.667c.378-.329.94-.329 1.318 0");
}
</style><g class="cuyn6tgcc"><path class="y0bsh1b5l"/><path class="a0e3x4k9z"/></g>`,
		"fallback": "coolicons:house-geothermal-bulk-sharp",
	});
}

export default Component;
