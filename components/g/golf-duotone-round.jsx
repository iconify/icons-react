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

.j_w8y1b_f {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V7c0-1.838 2.162-2.919 4-2c1.648.824 1.648 3.176 0 4zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}

.zhetuemhk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m14 9l-4 2V7c0-1.838 2.162-2.919 4-2a2.235 2.235 0 0 1 0 4");
}
</style><g class="ft5dv1b6b"><path class="zhetuemhk"/><path class="j_w8y1b_f"/></g>`,
		"fallback": "coolicons:golf-duotone-round",
	});
}

export default Component;
