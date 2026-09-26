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

.trjkit8hc {
  d: path("M4 10L4 14M12 3L12 21M20 10L20 14");
}

.zdn9vqbnn {
  stroke-opacity: 0.4;
  d: path("M8 6L8 18M16 7L16 17");
}
</style><g class="nrj6p8qat"><path class="zdn9vqbnn"/><path class="trjkit8hc"/></g>`,
		"fallback": "keyline-icons:audio-lines-duotone",
	});
}

export default Component;
