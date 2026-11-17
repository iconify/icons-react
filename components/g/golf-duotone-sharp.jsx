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

.fx5wcxc3d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m18 7l-8 4V3Z");
}

.o71inub6l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V3l8 4zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}
</style><g class="ft5dv1b6b"><path class="fx5wcxc3d"/><path class="o71inub6l"/></g>`,
		"fallback": "coolicons:golf-duotone-sharp",
	});
}

export default Component;
