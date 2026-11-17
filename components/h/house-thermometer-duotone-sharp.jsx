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

.gm_p9qzqw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l8 7v11H4V10zm0 5a1.5 1.5 0 0 1 1.5 1.5v4.373A2.25 2.25 0 0 1 12 17.8M12 8a1.5 1.5 0 0 0-1.5 1.5v4.373A2.25 2.25 0 0 0 12 17.8");
}

.qab80b9mo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 10v11H4V10l8-7Z");
}
</style><g class="ft5dv1b6b"><path class="qab80b9mo"/><path class="gm_p9qzqw"/></g>`,
		"fallback": "coolicons:house-thermometer-duotone-sharp",
	});
}

export default Component;
