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
		"content": `<style>.ldnrvyb3m {
  d: path("M3 14L9.5 14C9.7761 14 10 14.2239 10 14.5L10 21M9.4 14.6L3 21");
}

.lq48qtbtv {
  stroke-opacity: 0.4;
  d: path("M21 10L14.5 10C14.2239 10 14 9.7761 14 9.5L14 3M14.6 9.4L21 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lq48qtbtv"/><path class="ldnrvyb3m"/></g>`,
		"fallback": "keyline-icons:fullscreen-exit-duotone",
	});
}

export default Component;
