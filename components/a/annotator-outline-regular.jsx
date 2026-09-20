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
		"content": `<style>.e325robmt {
  d: path("M3 13a4 4 0 0 1 8 0");
}

.hac_zt_2k {
  d: path("M5 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_fc33bvv {
  d: path("M13 12h5l3.5 3.5L18 19h-5Z");
}
</style><g class="nrj6p8qat"><path class="hac_zt_2k"/><path class="e325robmt"/><path class="s_fc33bvv"/></g>`,
		"fallback": "iconmind:annotator-outline-regular",
	});
}

export default Component;
