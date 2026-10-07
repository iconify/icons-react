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

.qg5b6bbwe {
  d: path("M19 19L19 9M16 12L19 9L22 12");
}

.rxdjtqbaf {
  stroke-opacity: 0.4;
  d: path("M2 19L7 5L12 19M3.7857 14L10.2143 14");
}
</style><g class="nrj6p8qat"><path class="rxdjtqbaf"/><path class="qg5b6bbwe"/></g>`,
		"fallback": "keyline-icons:a-arrow-up-duotone",
	});
}

export default Component;
