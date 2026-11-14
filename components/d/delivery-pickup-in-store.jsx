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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vfgvq-zgz {
  d: path("m12.756 11.691l1.5.875A1.5 1.5 0 0 1 15 13.862v1.776a1.5 1.5 0 0 1-.744 1.296l-1.5.875a1.5 1.5 0 0 1-1.512 0l-1.5-.875A1.5 1.5 0 0 1 9 15.638v-1.776a1.5 1.5 0 0 1 .744-1.296l1.5-.875a1.5 1.5 0 0 1 1.512 0");
}

.xsbaghb4e {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M5.25 8.75V18m13.5-9.25V18M5 18h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 21H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 18");
}

.znz31wb9z {
  d: path("m9 13l3 1.75L15 13m-3 1.75v3.5");
}
</style><g class="hntgybcog"><path class="xsbaghb4e"/><path class="vfgvq-zgz"/><path class="znz31wb9z"/></g>`,
		"fallback": "uix:delivery-pickup-in-store",
	});
}

export default Component;
