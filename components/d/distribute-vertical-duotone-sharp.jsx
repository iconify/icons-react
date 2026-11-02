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

.kuwmncttt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9v6h12V9ZM3 4h18M3 20h18");
}

.oqvj_ub5u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 9h12v6H6Z");
}
</style><g class="ft5dv1b6b"><path class="oqvj_ub5u"/><path class="kuwmncttt"/></g>`,
		"fallback": "coolicons:distribute-vertical-duotone-sharp",
	});
}

export default Component;
