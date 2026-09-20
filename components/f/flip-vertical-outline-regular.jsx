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
		"content": `<style>.fnp0mpbza {
  d: path("m5 9 7 -7 7 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qdo8thqpt {
  d: path("m5 15 7 7 7 -7Z");
}

.xucfzr8ng {
  d: path("M3 12h4");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="nrj6p8qat"><path class="fnp0mpbza"/><path class="qdo8thqpt"/><path class="xucfzr8ng"/><path class="y0y0ccsoe"/><path class="zy54a7bml"/></g>`,
		"fallback": "iconmind:flip-vertical-outline-regular",
	});
}

export default Component;
