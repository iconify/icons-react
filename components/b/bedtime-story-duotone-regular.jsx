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
		"content": `<style>.d3t8z9b-e {
  d: path("M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
}

.k3hxzxbpv {
  fill: currentColor;
  d: path("M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
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

.rsejymb4c {
  d: path("M12 13q-3 -3 -9 -3v10c4 0 7 1 9 2");
}

.uom89l0gh {
  d: path("M12 13q3 -3 9 -3v10c-4 0 -7 1 -9 2");
}
</style><g class="nrj6p8qat"><path class="k3hxzxbpv"/><path class="rsejymb4c"/><path class="uom89l0gh"/><path class="d3t8z9b-e"/></g>`,
		"fallback": "iconmind:bedtime-story-duotone-regular",
	});
}

export default Component;
