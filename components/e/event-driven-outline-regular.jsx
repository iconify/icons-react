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
		"content": `<style>.d251mrbie {
  d: path("m16 3 -5 5h3l-5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o035hszqc {
  d: path("m14 14 3 3 -3 3");
}

.ukjt4fb6s {
  d: path("M3 17h12");
}
</style><g class="nrj6p8qat"><path class="d251mrbie"/><path class="ukjt4fb6s"/><path class="o035hszqc"/></g>`,
		"fallback": "iconmind:event-driven-outline-regular",
	});
}

export default Component;
