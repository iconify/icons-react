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

.lw79kvbst {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 3v7h-7V3ZM10 7v7h7v7H3V7Z");
}

.o58o4slsa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h7v7h7v7H3zm7 7v7m-7-7h7m4-11h7v7h-7Z");
}
</style><g class="ft5dv1b6b"><path class="lw79kvbst"/><path class="o58o4slsa"/></g>`,
		"fallback": "coolicons:blocks-duotone-sharp",
	});
}

export default Component;
