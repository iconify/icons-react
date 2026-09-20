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
		"content": `<style>.jqxl7db2x {
  d: path("M4 3h16v17l-8 -8 -8 8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tu0fdo1xi {
  d: path("M7 7h10");
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="nrj6p8qat"><path class="jqxl7db2x"/><path class="tu0fdo1xi"/><path class="uepsd3bvn"/></g>`,
		"fallback": "iconmind:honour-roll-outline-regular",
	});
}

export default Component;
