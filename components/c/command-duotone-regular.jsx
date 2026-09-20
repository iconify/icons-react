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
		"content": `<style>.iyy1tqbcu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 4v10H5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9x6y_bij {
  d: path("m9 10 -4 4 4 4");
}

.wptmod37f {
  d: path("M21 4v10H5");
}

.xjya-9bxh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 10 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="iyy1tqbcu"/><path class="xjya-9bxh"/><path class="wptmod37f"/><path class="o9x6y_bij"/></g>`,
		"fallback": "iconmind:command-duotone-regular",
	});
}

export default Component;
