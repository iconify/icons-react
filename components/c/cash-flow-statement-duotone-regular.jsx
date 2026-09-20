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
		"content": `<style>.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.mz7uf8bft {
  d: path("m6 14 2.5 -2.5L11 14l2.5 -2.5L16 14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.scbk07b_m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m6 14 2.5 -2.5L11 14l2.5 -2.5L16 14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wo--el8ej {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wo--el8ej"/><path class="scbk07b_m"/><path class="ky4omnbla"/><path class="mz7uf8bft"/></g>`,
		"fallback": "iconmind:cash-flow-statement-duotone-regular",
	});
}

export default Component;
