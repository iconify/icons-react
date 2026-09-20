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
		"content": `<style>.cc0pq4b_o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lg9uabb_p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mpjdm200q {
  d: path("M6 4v16");
}

.tkeq0bpvv {
  d: path("M18 4v16");
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.ydrfk9w6p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ydrfk9w6p"/><path class="lg9uabb_p"/><path class="cc0pq4b_o"/><path class="mpjdm200q"/><path class="tkeq0bpvv"/><path class="vslz5yb3q"/></g>`,
		"fallback": "iconmind:heading-duotone-thin",
	});
}

export default Component;
