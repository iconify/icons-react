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

.pq65d4pux {
  d: path("M20 20V10H4");
}

.wuavqcbqp {
  d: path("m9 5 -5 5 5 5");
}
</style><g class="nrj6p8qat"><path class="pq65d4pux"/><path class="wuavqcbqp"/></g>`,
		"fallback": "iconmind:corner-up-left-outline-regular",
	});
}

export default Component;
