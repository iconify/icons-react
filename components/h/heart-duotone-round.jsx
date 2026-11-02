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
		"content": `<style>.d8bs5561x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7c-2-4-9-4-9 2s9 11 9 11s9-5 9-11s-7-6-9-2");
}

.ft5dv1b6b {
  fill: none;
}

.os1jtewbv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 7c2-4 9-4 9 2s-9 11-9 11s-9-5-9-11s7-6 9-2");
}
</style><g class="ft5dv1b6b"><path class="os1jtewbv"/><path class="d8bs5561x"/></g>`,
		"fallback": "coolicons:heart-duotone-round",
	});
}

export default Component;
