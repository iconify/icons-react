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
		"content": `<style>.cm1mvkb-r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 12 5 5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q9br621tu {
  d: path("m9 12 5 5h8");
}

.uol1biies {
  d: path("M2 12h7l5 -5h8");
}

.vw9cecc7l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h7l5 -5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="vw9cecc7l"/><path class="cm1mvkb-r"/><path class="uol1biies"/><path class="q9br621tu"/></g>`,
		"fallback": "iconmind:branch-flow-duotone-regular",
	});
}

export default Component;
