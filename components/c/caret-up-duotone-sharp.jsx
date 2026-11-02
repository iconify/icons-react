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

.xk1_83k9l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 14l4-4l4 4Z");
}

.zvuq68b9h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m8 14l4-4l4 4Z");
}
</style><g class="ft5dv1b6b"><path class="zvuq68b9h"/><path class="xk1_83k9l"/></g>`,
		"fallback": "coolicons:caret-up-duotone-sharp",
	});
}

export default Component;
