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

.t-l61-b-w {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 8a3 3 0 0 1 3-3h11c.379 0 .725.214.894.553l3 6A1 1 0 0 1 19 13H3a1 1 0 0 1-1-1Z");
}

.tvr71mvii {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 17l-1-5m0 0h18l-1 5M3 12V8a2 2 0 0 1 2-2h11l3 6M5 6V3M2 20c.5.5 1 1 2 1c2 0 2-2 4-2s2 2 4 2s2-2 4-2s2 2 4 2c1 0 1.5-.5 2-1M11 9h.01M14 9h.01");
}
</style><g class="ft5dv1b6b"><path class="t-l61-b-w"/><path class="tvr71mvii"/></g>`,
		"fallback": "coolicons:ferry-duotone",
	});
}

export default Component;
