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
		"content": `<style>.gxonvhq6b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 15 7 -7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sbpsi82ym {
  d: path("m5 15 7 -7 7 7");
}
</style><g class="nrj6p8qat"><path class="gxonvhq6b"/><path class="sbpsi82ym"/></g>`,
		"fallback": "iconmind:chevron-up-duotone-regular",
	});
}

export default Component;
