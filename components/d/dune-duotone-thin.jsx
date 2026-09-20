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
		"content": `<style>.evcx__bzi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 19h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.olqfcgidt {
  d: path("M6 19h12");
}

.s0kxqdbiw {
  d: path("M2 15a10 6 0 0 1 20 0");
}

.th5tk2b6w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 15a10 6 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uzkjx1-8e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 15h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="th5tk2b6w"/><path class="uzkjx1-8e"/><path class="evcx__bzi"/><path class="s0kxqdbiw"/><path class="l8dn9jbyp"/><path class="olqfcgidt"/></g>`,
		"fallback": "iconmind:dune-duotone-thin",
	});
}

export default Component;
