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
		"content": `<style>.b_0km7o6f {
  d: path("M6 11L6 21M3 18L6 21L9 18M11 6L21 6M18 9L21 6L18 3");
}

.ks2nvkbhl {
  stroke-opacity: 0.4;
  d: path("M21 13L21 14.3333M21 18.3333C21 19.8061 19.8061 21 18.3333 21M14.3333 21L13 21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b_0km7o6f"/><path class="ks2nvkbhl"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-right-duotone",
	});
}

export default Component;
