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

.oxs0gmbsb {
  stroke-opacity: 0.4;
  d: path("M10.393 11a2.83 2.83 0 0 1-1.226-2.333c0-.709.236-1.18.472-1.417C10.347 6.542 11.292 4.889 12 3c.236 1.18.944 2.125 1.889 2.833c.708.709.944 1.653.944 2.834c0 .932-.458 1.804-1.226 2.333");
}

.pfp8x9tdd {
  d: path("M8 11h8v10H8Z");
}
</style><g class="nrj6p8qat"><path class="oxs0gmbsb"/><path class="pfp8x9tdd"/></g>`,
		"fallback": "coolicons:candle-duocolor-sharp",
	});
}

export default Component;
