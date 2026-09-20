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
		"content": `<style>.jm7jgyogs {
  d: path("M4 6a4 4 0 0 1 5 2 4 4 0 0 1 5 -2c2 4 0 13 -2.5 13C10 19 10 13 9 13s-1 6 -2.5 6C4 19 2 10 4 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tbfv-yd2s {
  fill: currentColor;
  d: path("M4 6a4 4 0 0 1 5 2 4 4 0 0 1 5 -2c2 4 0 13 -2.5 13C10 19 10 13 9 13s-1 6 -2.5 6C4 19 2 10 4 6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vrzeiketi {
  d: path("m16 15 2 2 4 -4");
}
</style><g class="nrj6p8qat"><path class="tbfv-yd2s"/><path class="jm7jgyogs"/><path class="vrzeiketi"/></g>`,
		"fallback": "iconmind:dental-duotone-regular",
	});
}

export default Component;
