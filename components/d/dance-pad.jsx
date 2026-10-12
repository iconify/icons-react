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
		"content": `<style>.dt3j7ib_c {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.tq5fvchzp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 8l2-2l2 2m-4 8l2 2l2-2m-6-6l-2 2l2 2m8-4l2 2l-2 2");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="dt3j7ib_c"/><path class="tq5fvchzp"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:dance-pad",
	});
}

export default Component;
