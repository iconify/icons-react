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
		"content": `<style>.a2ldvth_q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8.25a3.5 3.5 0 0 0 0 5m5-5a3.5 3.5 0 0 1 0 5");
}

.i_sc52z6z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25a2.5 2.5 0 0 1 2.5-2.5h13.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H12.5L8 20.85a.77.77 0 0 1-1.25-.6v-2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5Z");
}

.sgb83qbng {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="i_sc52z6z"/><path class="sgb83qbng"/><path class="a2ldvth_q"/></g>`,
		"fallback": "iconoven:broadcast-channel",
	});
}

export default Component;
