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
		"content": `<style>.eujto1cse {
  d: path("M2.5 18a4.5 4.5 0 0 1 9 0");
}

.jzln5b9mk {
  d: path("M4 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.m3i8kpzkt {
  d: path("M13 4h8a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-5l-3 3v-3a1 1 0 0 1 -1 -1V5a1 1 0 0 1 1 -1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jzln5b9mk"/><path class="eujto1cse"/><path class="m3i8kpzkt"/></g>`,
		"fallback": "iconmind:counsellor-outline-regular",
	});
}

export default Component;
