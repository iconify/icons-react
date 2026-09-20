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

.q2pah9bya {
  d: path("M20 15.33a3.5 3.5 0 1 1 -2.96 0");
}

.v34nbkq0p {
  d: path("M7 2.33a3.5 3.5 0 1 1 -2.96 0");
}

.zmj1nccll {
  d: path("M8.5 10.5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="v34nbkq0p"/><path class="zmj1nccll"/><path class="q2pah9bya"/></g>`,
		"fallback": "iconmind:context-handout-outline-regular",
	});
}

export default Component;
