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
		"content": `<style>.cvoep2bmy {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nc6yfes3p {
  fill: currentColor;
  d: path("M9 14h6l-3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ptznkxbtu {
  d: path("M9 14h6l-3 3Z");
}

.tu0fdo1xi {
  d: path("M7 7h10");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="cvoep2bmy"/><path class="nc6yfes3p"/><path class="zrwkhybyf"/><path class="d8abqfbpc"/><path class="tu0fdo1xi"/><path class="ptznkxbtu"/></g>`,
		"fallback": "iconmind:electric-meter-duotone-thin",
	});
}

export default Component;
