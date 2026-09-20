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
		"content": `<style>.dqeovmbtl {
  d: path("m5 18 4 -4 3 3 7 -7");
}

.fua3x2iyd {
  d: path("M17 6h4");
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
</style><g class="nrj6p8qat"><path class="qe97cg-lx"/><path class="dqeovmbtl"/><path class="fua3x2iyd"/></g>`,
		"fallback": "iconmind:growth-chart-outline-regular",
	});
}

export default Component;
