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
		"content": `<style>.a-37yhb7n {
  fill: currentColor;
  d: path("M11 4C7 4 5 6 5 8c-2 1 -2 4 0 5 0 3 2 7 6 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fu9iqf-ht {
  d: path("M11 4C7 4 5 6 5 8c-2 1 -2 4 0 5 0 3 2 7 6 7Z");
}

.g8yenp7wc {
  d: path("M14 4c4 0 6 2 6 4 2 1 2 4 0 5 0 3 -2 7 -6 7Z");
}

.mjllekbnz {
  fill: currentColor;
  d: path("M14 4c4 0 6 2 6 4 2 1 2 4 0 5 0 3 -2 7 -6 7Z");
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
</style><g class="nrj6p8qat"><path class="a-37yhb7n"/><path class="mjllekbnz"/><path class="fu9iqf-ht"/><path class="g8yenp7wc"/></g>`,
		"fallback": "iconmind:brain-duotone-regular",
	});
}

export default Component;
