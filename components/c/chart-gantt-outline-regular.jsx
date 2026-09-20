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
		"content": `<style>.lqiw_3bos {
  d: path("M10 12h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r_r678bum {
  d: path("M6 7h6");
}

.r3faxubne {
  d: path("M4 4v16");
}

.xyhj-ubbr {
  d: path("M13 17h7");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="r_r678bum"/><path class="lqiw_3bos"/><path class="xyhj-ubbr"/></g>`,
		"fallback": "iconmind:chart-gantt-outline-regular",
	});
}

export default Component;
