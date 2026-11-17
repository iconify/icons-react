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

.lxr5h_bko {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m16 12l-6 4V8Z");
}

.vzi-rx4ch {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.592 3.11a9 9 0 1 1-7.481 7.482M4.719 6.71a9 9 0 0 1 1.99-1.991M10 8v8l6-4z");
}
</style><g class="ft5dv1b6b"><path class="lxr5h_bko"/><path class="vzi-rx4ch"/></g>`,
		"fallback": "coolicons:circle-dashed-play-three-quarter-duotone-sharp",
	});
}

export default Component;
