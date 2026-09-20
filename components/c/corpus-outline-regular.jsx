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
		"content": `<style>.i5d2grbwo {
  d: path("M13 2H6v14h10V5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s27ukbqxc {
  d: path("M16 8H9v14h10V11");
}
</style><g class="nrj6p8qat"><path class="i5d2grbwo"/><path class="s27ukbqxc"/></g>`,
		"fallback": "iconmind:corpus-outline-regular",
	});
}

export default Component;
