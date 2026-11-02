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

.sb7p2cb-p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 5a3 3 0 1 1 6 0v5.234l3.486-2.091A.997.997 0 0 1 15 9v1.234l3.486-2.091A.997.997 0 0 1 20 9v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z");
}

.sha6h0b4p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V5a2 2 0 1 1 4 0v7l5-3v3l5-3v12M8 16h.01M12 16h.01M16 16h.01");
}
</style><g class="ft5dv1b6b"><path class="sb7p2cb-p"/><path class="sha6h0b4p"/></g>`,
		"fallback": "coolicons:factory-duotone",
	});
}

export default Component;
