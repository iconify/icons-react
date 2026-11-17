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

.z4yx2o2ei {
  d: path("M12 15H8.667a2 2 0 0 1-2-2V8.574A2 2 0 0 1 7.35 7.07l3.333-2.917a2 2 0 0 1 2.634 0L16.65 7.07a2 2 0 0 1 .683 1.505V13a2 2 0 0 1-2 2z");
}
</style><g class="nrj6p8qat"><path class="bv8jz9bfg"/><path class="z4yx2o2ei"/></g>`,
		"fallback": "coolicons:house-geothermal-duocolor",
	});
}

export default Component;
