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
		"content": `<style>.etkdmvbup {
  d: path("M2.25 9.75L5.5 11.5l3.25-1.75M5.5 11.5V16m9.75-6.25l3.25 1.75l3.25-1.75M18.5 11.5V16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kgdl3rbpb {
  d: path("m6.211 8.383l1.75.942a1.5 1.5 0 0 1 .789 1.321v2.708a1.5 1.5 0 0 1-.789 1.321l-1.75.942a1.5 1.5 0 0 1-1.422 0l-1.75-.942a1.5 1.5 0 0 1-.789-1.321v-2.708a1.5 1.5 0 0 1 .789-1.321l1.75-.942a1.5 1.5 0 0 1 1.422 0m13 0l1.75.942a1.5 1.5 0 0 1 .789 1.321v2.708a1.5 1.5 0 0 1-.789 1.321l-1.75.942a1.5 1.5 0 0 1-1.422 0l-1.75-.942a1.5 1.5 0 0 1-.789-1.321v-2.708a1.5 1.5 0 0 1 .789-1.321l1.75-.942a1.5 1.5 0 0 1 1.422 0M12 10.25v3.5M10.25 12h3.5");
}
</style><g class="hntgybcog"><path class="kgdl3rbpb"/><path class="etkdmvbup"/></g>`,
		"fallback": "uix:frequently-bought-together",
	});
}

export default Component;
