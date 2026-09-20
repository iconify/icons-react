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
		"content": `<style>.aupqujbgb {
  fill: currentColor;
  d: path("m7 4 8 8 -8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d63rwyblf {
  d: path("m7 4 8 8 -8 8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aupqujbgb"/><path class="d63rwyblf"/></g>`,
		"fallback": "iconmind:execute-duotone-regular",
	});
}

export default Component;
