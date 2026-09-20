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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.lbted13-s {
  d: path("M15 12v3c0 2 3 2 4 0 2 -4 -1 -11 -7 -11 -5 0 -9 4 -9 8s4 8 9 8c2 0 3 -0.5 4 -1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wfyw8dbnu {
  fill: currentColor;
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wfyw8dbnu"/><path class="enrpg0aoq"/><path class="lbted13-s"/></g>`,
		"fallback": "iconmind:handle-duotone-regular",
	});
}

export default Component;
