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
		"content": `<style>.bv8jz9bfg {
  stroke-opacity: 0.4;
  d: path("M12 15v4m-6 2v-2h12v2m-8-2v2m4-2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s-9jkyo3v {
  d: path("m12 3l5.333 4.667V15H6.667V7.667z");
}
</style><g class="nrj6p8qat"><path class="bv8jz9bfg"/><path class="s-9jkyo3v"/></g>`,
		"fallback": "coolicons:house-geothermal-duocolor-sharp",
	});
}

export default Component;
