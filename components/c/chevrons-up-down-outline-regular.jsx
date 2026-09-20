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
		"content": `<style>.ag27qibsz {
  d: path("m7 15 5 5 5 -5");
}

.caznxbcdb {
  d: path("m7 9 5 -5 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="caznxbcdb"/><path class="ag27qibsz"/></g>`,
		"fallback": "iconmind:chevrons-up-down-outline-regular",
	});
}

export default Component;
