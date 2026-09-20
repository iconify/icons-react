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

.mapwwf30m {
  d: path("M12 7v4.5");
}

.sscby3y4w {
  d: path("m12 2.5 9.5 9.5 -9.5 9.5L2.5 12Z");
}

.vqi6vft7m {
  d: path("M11 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="sscby3y4w"/><path class="mapwwf30m"/><path class="vqi6vft7m"/></g>`,
		"fallback": "iconmind:hazard-outline-thin",
	});
}

export default Component;
