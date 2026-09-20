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
		"content": `<style>.bjz8zacox {
  d: path("M14.11 9.47a5 5 0 1 1 -4.22 0");
}

.iqeob--3r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 7 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp3du3b3p {
  d: path("m7 7 5 -5 5 5");
}

.qzpthv8mp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14.11 9.47a5 5 0 1 1 -4.22 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="iqeob--3r"/><path class="qzpthv8mp"/><path class="pp3du3b3p"/><path class="bjz8zacox"/></g>`,
		"fallback": "iconmind:agent-priority-duotone-regular",
	});
}

export default Component;
