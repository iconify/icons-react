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
		"content": `<style>.bc38ssbmv {
  d: path("m3 6 6 6 -6 6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nxg78fr6n {
  d: path("m21 6 -6 6 6 6Z");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.u6i63ebjk {
  fill: currentColor;
  d: path("m21 6 -6 6 6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zajsl6b4z {
  fill: currentColor;
  d: path("m3 6 6 6 -6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zajsl6b4z"/><path class="u6i63ebjk"/><path class="bc38ssbmv"/><path class="r7xk8o29f"/><path class="nxg78fr6n"/></g>`,
		"fallback": "iconmind:flip-h-duotone-thin",
	});
}

export default Component;
