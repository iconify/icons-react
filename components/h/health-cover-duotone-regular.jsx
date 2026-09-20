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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.foemy1bum {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lt9ujii4h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qbcupf2rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 16h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qtbc6tb3f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4.5 9.5h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ts5ij9bsc {
  d: path("M12 13v6");
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="nrj6p8qat"><path class="foemy1bum"/><path class="qtbc6tb3f"/><path class="lt9ujii4h"/><path class="qbcupf2rr"/><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="ts5ij9bsc"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:health-cover-duotone-regular",
	});
}

export default Component;
