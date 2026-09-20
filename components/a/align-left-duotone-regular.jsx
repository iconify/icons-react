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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cn-9z7b7f {
  d: path("M3 18h15");
}

.mojmrdb8z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ox5l_oflw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x22av82oi {
  d: path("M3 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="ox5l_oflw"/><path class="mojmrdb8z"/><path class="xgrfb-bqu"/><path class="x22av82oi"/><path class="cn-9z7b7f"/></g>`,
		"fallback": "iconmind:align-left-duotone-regular",
	});
}

export default Component;
