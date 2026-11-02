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

.o71inub6l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V3l8 4zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}

.w-nec0saa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18.447 6.106a.998.998 0 0 1 0 1.788l-8 4A1 1 0 0 1 9 11V3a1 1 0 0 1 1.447-.894Z");
}
</style><g class="ft5dv1b6b"><path class="w-nec0saa"/><path class="o71inub6l"/></g>`,
		"fallback": "coolicons:golf-duotone-sharp",
	});
}

export default Component;
