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
		"content": `<style>.bk5n09bgv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cd3ob020j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mpjdm200q {
  d: path("M6 4v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkeq0bpvv {
  d: path("M18 4v16");
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.zhgf1vz5u {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cd3ob020j"/><path class="zhgf1vz5u"/><path class="bk5n09bgv"/><path class="mpjdm200q"/><path class="tkeq0bpvv"/><path class="vslz5yb3q"/></g>`,
		"fallback": "iconmind:heading-duotone-regular",
	});
}

export default Component;
