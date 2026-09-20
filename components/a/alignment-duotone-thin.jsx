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
		"content": `<style>.haukdub-k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lpthwr95f {
  d: path("M3 17h6l4 -4");
}

.qlfruhq7c {
  d: path("M13 12h5");
}

.tw3a5bcpe {
  d: path("M3 7h6l4 4");
}

.x_695tm0l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h6l4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y62shtbpm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h6l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zifm62gud {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="y62shtbpm"/><path class="x_695tm0l"/><path class="haukdub-k"/><path class="zifm62gud"/><path class="tw3a5bcpe"/><path class="lpthwr95f"/><path class="qlfruhq7c"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:alignment-duotone-thin",
	});
}

export default Component;
