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
		"content": `<style>.be-du29wl {
  d: path("M12 2.5h5V6h-5");
}

.m0p17bc4l {
  fill: currentColor;
  d: path("M10 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m7goar83z {
  d: path("M10 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olxc00wjs {
  d: path("M6 15a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.wrnic2b7h {
  fill: currentColor;
  d: path("M6 15a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z_j864liq {
  d: path("M12 2v7");
}
</style><g class="nrj6p8qat"><path class="wrnic2b7h"/><path class="m0p17bc4l"/><path class="olxc00wjs"/><path class="m7goar83z"/><path class="z_j864liq"/><path class="be-du29wl"/></g>`,
		"fallback": "iconmind:goal-milestone-duotone-regular",
	});
}

export default Component;
