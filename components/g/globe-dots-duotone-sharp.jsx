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

.hd9qk_mlz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4.629 8.886a8.002 8.002 0 0 1 14.74 6.228a8.002 8.002 0 0 1-14.74-6.228");
}

.pqif1nb0n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 0 0-14 0m7-7c-1.657 0-3 3.134-3 7s1.343 7 3 7s3-3.134 3-7s-1.343-7-3-7m-7 7h14M4 4h.01M20 4h.01M4 20h.01M20 20h.01");
}
</style><g class="ft5dv1b6b"><path class="hd9qk_mlz"/><path class="pqif1nb0n"/></g>`,
		"fallback": "coolicons:globe-dots-duotone-sharp",
	});
}

export default Component;
