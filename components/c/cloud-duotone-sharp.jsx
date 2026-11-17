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
		"content": `<style>.afngq-b6l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 19A5 5 0 0 1 7 9c2-7 11-6 11 2a4 4 0 0 1 0 8Z");
}

.ft5dv1b6b {
  fill: none;
}

.nsvc1vb_t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19A5 5 0 0 1 7 9c2-7 11-6 11 2a4 4 0 1 1 0 8Z");
}
</style><g class="ft5dv1b6b"><path class="afngq-b6l"/><path class="nsvc1vb_t"/></g>`,
		"fallback": "coolicons:cloud-duotone-sharp",
	});
}

export default Component;
