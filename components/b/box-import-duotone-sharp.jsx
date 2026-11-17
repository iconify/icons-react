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

.zadxv7uox {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 2l9 4.444l-9 4.445V22l-9-4.444V6.444Z");
}

.zi7_z1bdw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12V6.444l-4.5-2.222m0 0L12 2L3 6.444v11.112L12 22V10.889M3 6.444l9 4.445l9-4.445M18 15l-3 3l3 3m-3-3h6");
}
</style><g class="ft5dv1b6b"><path class="zadxv7uox"/><path class="zi7_z1bdw"/></g>`,
		"fallback": "coolicons:box-import-duotone-sharp",
	});
}

export default Component;
