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
		"content": `<style>.cd3ob020j {
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

.qrn866ncb {
  d: path("m10 9 3 3 3 -3 3 3");
}

.v8mk04bql {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 9 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cd3ob020j"/><path class="v8mk04bql"/><path class="mpjdm200q"/><path class="qrn866ncb"/></g>`,
		"fallback": "iconmind:feature-drift-duotone-regular",
	});
}

export default Component;
