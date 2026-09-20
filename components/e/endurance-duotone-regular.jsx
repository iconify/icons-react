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
		"content": `<style>.cmt-chbtl {
  d: path("m2 20 6 -6 3 3 4 -4 7 7");
}

.djhqsab3n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 5h4v4h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fo13ctbss {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 20 6 -6 3 3 4 -4 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iwanrcb5f {
  d: path("M15 13V5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ph2x_gbdg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 13V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s97tcsbyl {
  d: path("M15 5h4v4h-4");
}
</style><g class="nrj6p8qat"><path class="fo13ctbss"/><path class="ph2x_gbdg"/><path class="djhqsab3n"/><path class="cmt-chbtl"/><path class="iwanrcb5f"/><path class="s97tcsbyl"/></g>`,
		"fallback": "iconmind:endurance-duotone-regular",
	});
}

export default Component;
