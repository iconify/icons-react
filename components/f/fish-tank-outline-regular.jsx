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
		"content": `<style>.ebww8dbae {
  d: path("m9 15 -3 -3");
}

.fya2ljx1a {
  d: path("M9 15c2 -3 6 -3 8 0 -2 3 -6 3 -8 0");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rg1eezbnh {
  d: path("M3 6v14h18V6Z");
}
</style><g class="nrj6p8qat"><path class="rg1eezbnh"/><path class="j835zw5-z"/><path class="fya2ljx1a"/><path class="ebww8dbae"/></g>`,
		"fallback": "iconmind:fish-tank-outline-regular",
	});
}

export default Component;
