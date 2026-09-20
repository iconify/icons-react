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
		"content": `<style>.bx6cs-b9q {
  d: path("M16 3.5a2.5 2.5 0 0 1 0 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nt1osdoki {
  d: path("M14 21h7");
}

.spiam7zpy {
  d: path("M16 13.5a2.5 2.5 0 0 1 0 -5");
}

.wfp94ccxr {
  d: path("M6 21V11h6v10Z");
}
</style><g class="nrj6p8qat"><path class="wfp94ccxr"/><path class="spiam7zpy"/><path class="bx6cs-b9q"/><path class="nt1osdoki"/></g>`,
		"fallback": "iconmind:emissions-outline-regular",
	});
}

export default Component;
