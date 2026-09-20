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
		"content": `<style>.a2jmonbvk {
  d: path("M6 14h14l-7 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ypr8o0dzv {
  d: path("M7 3C5 4.5 4 7 5 9s3 2.5 4.5 2c-1 -1.5 -1.5 -3.5 -1 -5.5 0.3 -1 -0.5 -2 -1.5 -2.5");
}
</style><g class="nrj6p8qat"><path class="ypr8o0dzv"/><path class="a2jmonbvk"/></g>`,
		"fallback": "iconmind:after-party-outline-regular",
	});
}

export default Component;
