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

.obucryboc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v8H3Zm0 12h18v6H3Zm4-9v2m7-2l2 2l2-2M7 18h10");
}

.u-2834kfi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 3v8H3V3Zm0 12v6H3v-6Z");
}
</style><g class="ft5dv1b6b"><path class="u-2834kfi"/><path class="obucryboc"/></g>`,
		"fallback": "coolicons:combobox-duotone-sharp",
	});
}

export default Component;
