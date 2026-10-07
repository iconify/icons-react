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

.rxdjtqbaf {
  stroke-opacity: 0.4;
  d: path("M2 19L7 5L12 19M3.7857 14L10.2143 14");
}

.v1nby09ur {
  d: path("M19 9L19 19M16 16L19 19L22 16");
}
</style><g class="nrj6p8qat"><path class="rxdjtqbaf"/><path class="v1nby09ur"/></g>`,
		"fallback": "keyline-icons:a-arrow-down-two-tone",
	});
}

export default Component;
