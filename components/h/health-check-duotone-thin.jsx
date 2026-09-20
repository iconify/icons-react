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

.i7kaf-qlz {
  d: path("M3 12h5V6h4v12h4v-6h5");
}

.vgel1-xvj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h5V6h4v12h4v-6h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vgel1-xvj"/><path class="i7kaf-qlz"/></g>`,
		"fallback": "iconmind:health-check-duotone-thin",
	});
}

export default Component;
