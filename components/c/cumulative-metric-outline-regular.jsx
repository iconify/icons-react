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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.p80u_bcab {
  d: path("M7 17h3v-3h3v-3h3V8h3");
}

.r3faxubne {
  d: path("M4 4v16");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="p80u_bcab"/></g>`,
		"fallback": "iconmind:cumulative-metric-outline-regular",
	});
}

export default Component;
