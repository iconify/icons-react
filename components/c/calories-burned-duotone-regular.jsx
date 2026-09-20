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
		"content": `<style>.lq6q1vkdr {
  d: path("M12 2c2 4 6 6 6 11a6 6 0 1 1 -12 0c0 -4 3 -5 3 -8 1 1 3 1 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oyjr0sbrc {
  fill: currentColor;
  d: path("M12 2c2 4 6 6 6 11a6 6 0 1 1 -12 0c0 -4 3 -5 3 -8 1 1 3 1 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="oyjr0sbrc"/><path class="lq6q1vkdr"/></g>`,
		"fallback": "iconmind:calories-burned-duotone-regular",
	});
}

export default Component;
