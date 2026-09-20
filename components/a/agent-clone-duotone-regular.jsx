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
		"content": `<style>.c432l7q8b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 19.5h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fz8wgd32j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.19 8.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ookcwkbmf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.19 8.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rfpc8ubdp {
  d: path("M8.19 8.37a4 4 0 1 1 -3.38 0");
}

.t-mha0g5h {
  d: path("M19.19 8.37a4 4 0 1 1 -3.38 0");
}

.z0j9wnbwo {
  d: path("M4 19.5h16");
}
</style><g class="nrj6p8qat"><path class="ookcwkbmf"/><path class="fz8wgd32j"/><path class="c432l7q8b"/><path class="rfpc8ubdp"/><path class="t-mha0g5h"/><path class="z0j9wnbwo"/></g>`,
		"fallback": "iconmind:agent-clone-duotone-regular",
	});
}

export default Component;
