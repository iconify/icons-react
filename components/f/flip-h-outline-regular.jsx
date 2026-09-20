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
		"content": `<style>.bc38ssbmv {
  d: path("m3 6 6 6 -6 6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nxg78fr6n {
  d: path("m21 6 -6 6 6 6Z");
}

.r7xk8o29f {
  d: path("M12 4v16");
}
</style><g class="nrj6p8qat"><path class="bc38ssbmv"/><path class="r7xk8o29f"/><path class="nxg78fr6n"/></g>`,
		"fallback": "iconmind:flip-h-outline-regular",
	});
}

export default Component;
