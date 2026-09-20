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
		"content": `<style>.ayfcapvsy {
  d: path("M9 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.clfwo88xc {
  d: path("M12 10.5V13h2.5");
}

.g164o9b0d {
  fill: currentColor;
  d: path("M9 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="r0jamibkm"/><path class="g164o9b0d"/><path class="bn_pu6j-z"/><path class="ayfcapvsy"/><path class="clfwo88xc"/></g>`,
		"fallback": "iconmind:folder-clock-duotone-regular",
	});
}

export default Component;
