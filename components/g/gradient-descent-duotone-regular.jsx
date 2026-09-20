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
		"content": `<style>.b3_fr3bsp {
  d: path("M3 3h6v6h6v6h6");
}

.cpc3z_b1u {
  fill: currentColor;
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kdmnrabtq {
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o0eveql9f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3h6v6h6v6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cpc3z_b1u"/><path class="o0eveql9f"/><path class="b3_fr3bsp"/><path class="kdmnrabtq"/></g>`,
		"fallback": "iconmind:gradient-descent-duotone-regular",
	});
}

export default Component;
