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
		"content": `<style>.d0n0h67yq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 18 4 -4 3 3 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dqeovmbtl {
  d: path("m5 18 4 -4 3 3 7 -7");
}

.fua3x2iyd {
  d: path("M17 6h4");
}

.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hfjew04rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 6h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="d0n0h67yq"/><path class="hfjew04rr"/><path class="qe97cg-lx"/><path class="dqeovmbtl"/><path class="fua3x2iyd"/></g>`,
		"fallback": "iconmind:growth-chart-duotone-regular",
	});
}

export default Component;
