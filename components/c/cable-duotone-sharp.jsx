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
		"content": `<style>.alizsk_fc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5h8v4H3Zm10 10h8v4h-8ZM5 3v2m4-2v2m6 14v2m4-2v2M7 9v3h10v3");
}

.f90_vub-n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 5h8v4H3Zm10 10h8v4h-8Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="f90_vub-n"/><path class="alizsk_fc"/></g>`,
		"fallback": "coolicons:cable-duotone-sharp",
	});
}

export default Component;
