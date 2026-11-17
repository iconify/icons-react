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

.hevctzbwg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5h5.105a2 2 0 0 1 1.574.766a8.485 8.485 0 1 1-13.358 0A2 2 0 0 1 6.895 5ZM8 9h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}

.krs-bh5eq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.105 5c.614 0 1.195.283 1.574.766a8.485 8.485 0 1 1-13.358 0C5.7 5.283 6.281 5 6.895 5Z");
}
</style><g class="ft5dv1b6b"><path class="krs-bh5eq"/><path class="hevctzbwg"/></g>`,
		"fallback": "coolicons:ev-plug-duotone",
	});
}

export default Component;
