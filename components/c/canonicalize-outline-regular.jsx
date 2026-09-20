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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oboujbbaa {
  d: path("m3 5 3 3 3 -3 3 3 3 -3");
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.rdidnh2az {
  d: path("m10 11.5 2 2 2 -2");
}
</style><g class="nrj6p8qat"><path class="oboujbbaa"/><path class="rdidnh2az"/><path class="ok9ioqb8x"/></g>`,
		"fallback": "iconmind:canonicalize-outline-regular",
	});
}

export default Component;
