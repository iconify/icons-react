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

.lc0ypcbre {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 18V5h14v13h-5a1.999 1.999 0 0 0-3-1.732c-.619.357-1 1.017-1 1.732Z");
}

.n0u1uccdw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 18H3V5h14v13h-5M7 9h6v4H7Zm1 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m9-3h4");
}
</style><g class="ft5dv1b6b"><path class="lc0ypcbre"/><path class="n0u1uccdw"/></g>`,
		"fallback": "coolicons:caravan-duotone-sharp",
	});
}

export default Component;
