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

.xi070wb-z {
  d: path("M7 9.5L10.2 12.7L12.7 10.2L16.6 14.1M14 14.5H16.5C16.7761 14.5 17 14.2761 17 14V11.5");
}

.yw3lpkbij {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yw3lpkbij"/><path class="xi070wb-z"/></g>`,
		"fallback": "keyline-icons:circle-trending-down-duotone",
	});
}

export default Component;
