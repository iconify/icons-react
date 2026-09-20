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
		"content": `<style>.bztdq0bdr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 8 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e1cd9tzjc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g4h6r4ykz {
  d: path("M12 4v12");
}

.h3z-uye4u {
  d: path("m8 8 4 -4 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.rugctacrb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 20h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="rugctacrb"/><path class="e1cd9tzjc"/><path class="bztdq0bdr"/><path class="qdn88l2uv"/><path class="g4h6r4ykz"/><path class="h3z-uye4u"/></g>`,
		"fallback": "iconmind:arrow-up-from-line-duotone-thin",
	});
}

export default Component;
