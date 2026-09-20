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
		"content": `<style>.i67dqei2u {
  d: path("M4 10v10h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.piaam4vpr {
  d: path("M20 4 4 20");
}

.q3wfxmb7j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 10v10h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tt1gaezch {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 4 4 20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="tt1gaezch"/><path class="q3wfxmb7j"/><path class="piaam4vpr"/><path class="i67dqei2u"/></g>`,
		"fallback": "iconmind:arrow-down-left-duotone-regular",
	});
}

export default Component;
