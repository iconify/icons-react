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
		"content": `<style>.cjwdkfbkn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h12v12H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.x7u_1abwd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h12v12H3Zm4 18h14V7");
}
</style><g class="ft5dv1b6b"><path class="cjwdkfbkn"/><path class="x7u_1abwd"/></g>`,
		"fallback": "coolicons:drop-shadow-duotone-sharp",
	});
}

export default Component;
