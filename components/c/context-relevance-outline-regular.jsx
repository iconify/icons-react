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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.mm9i2knor {
  d: path("M11.5 7H14v6h-2.5");
}

.nesadtboq {
  d: path("M8.5 7H6v6h2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="nesadtboq"/><path class="mm9i2knor"/></g>`,
		"fallback": "iconmind:context-relevance-outline-regular",
	});
}

export default Component;
