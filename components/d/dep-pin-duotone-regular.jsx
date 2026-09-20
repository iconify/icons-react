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
		"content": `<style>.c0mv5nb8z {
  fill: currentColor;
  d: path("M14.5 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fwgh9qb5h {
  d: path("M14.5 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.h18rabcld {
  d: path("M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.iwwntwb1x {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nwn4xu84s {
  d: path("M17.5 14v4.5");
}
</style><g class="nrj6p8qat"><path class="iwwntwb1x"/><path class="c0mv5nb8z"/><path class="h18rabcld"/><path class="fwgh9qb5h"/><path class="nwn4xu84s"/></g>`,
		"fallback": "iconmind:dep-pin-duotone-regular",
	});
}

export default Component;
