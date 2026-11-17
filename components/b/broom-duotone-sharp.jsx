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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.uekraabwc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12h8l4 8H4zm2 8v-3m4 3v-3M12 3v9");
}

.ydo92bbly {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m16 12l4 8H4l4-8Z");
}
</style><g class="ft5dv1b6b"><path class="ydo92bbly"/><path class="uekraabwc"/></g>`,
		"fallback": "coolicons:broom-duotone-sharp",
	});
}

export default Component;
