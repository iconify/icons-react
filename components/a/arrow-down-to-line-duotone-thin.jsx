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
		"content": `<style>.e1cd9tzjc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g4h6r4ykz {
  d: path("M12 4v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0gojqv3g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 12 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pkaragbav {
  d: path("m8 12 4 4 4 -4");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.rugctacrb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 20h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="rugctacrb"/><path class="e1cd9tzjc"/><path class="l0gojqv3g"/><path class="qdn88l2uv"/><path class="g4h6r4ykz"/><path class="pkaragbav"/></g>`,
		"fallback": "iconmind:arrow-down-to-line-duotone-thin",
	});
}

export default Component;
