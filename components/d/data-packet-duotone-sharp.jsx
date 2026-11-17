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

.igvafcbmq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 5h12v14H9Zm0 4h12m-8 4v3m4-3v3M3 8h2m-2 4h2m-2 4h2");
}

.vzyrrbl3p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 5h12v14H9Z");
}
</style><g class="ft5dv1b6b"><path class="vzyrrbl3p"/><path class="igvafcbmq"/></g>`,
		"fallback": "coolicons:data-packet-duotone-sharp",
	});
}

export default Component;
