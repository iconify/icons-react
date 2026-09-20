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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rcsz11k7v {
  fill: currentColor;
  d: path("M9 14h6l-6 6h6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u5q3xebkh {
  d: path("M9 14h6l-6 6h6Z");
}

.vdkmp2b9k {
  d: path("M13.9 2.42a4.5 4.5 0 1 1 -3.8 0");
}
</style><g class="nrj6p8qat"><path class="rcsz11k7v"/><path class="vdkmp2b9k"/><path class="u5q3xebkh"/></g>`,
		"fallback": "iconmind:agent-lease-duotone-regular",
	});
}

export default Component;
