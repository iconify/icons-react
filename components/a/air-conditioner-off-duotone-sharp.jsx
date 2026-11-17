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
		"content": `<style>.ff9pr3oyh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h18v8H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.ns8w3hbfe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v8H3Zm4 5h10");
}
</style><g class="ft5dv1b6b"><path class="ff9pr3oyh"/><path class="ns8w3hbfe"/></g>`,
		"fallback": "coolicons:air-conditioner-off-duotone-sharp",
	});
}

export default Component;
