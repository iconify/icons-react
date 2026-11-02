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
		"content": `<style>.e8f3_tchj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h12v12H6Zm4-3v3m0 12v3M3 10h3m12 0h3m-7-7v3m0 12v3M3 14h3m12 0h3m-11-4h4v4h-4Z");
}

.ft5dv1b6b {
  fill: none;
}

.tfppe3b0n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 6v12H6V6Z");
}
</style><g class="ft5dv1b6b"><path class="tfppe3b0n"/><path class="e8f3_tchj"/></g>`,
		"fallback": "coolicons:cpu-duotone-sharp",
	});
}

export default Component;
