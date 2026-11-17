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
		"content": `<style>.dh6mzjbiu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17H3V7h4m6 0h5v5m3-2v4M2 2l20 20");
}

.ft5dv1b6b {
  fill: none;
}

.t-7br09vh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 17H3V7h4ZM13 7h5v5Z");
}
</style><g class="ft5dv1b6b"><path class="t-7br09vh"/><path class="dh6mzjbiu"/></g>`,
		"fallback": "coolicons:battery-off-duotone-sharp",
	});
}

export default Component;
