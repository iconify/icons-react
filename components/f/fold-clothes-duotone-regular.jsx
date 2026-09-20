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
		"content": `<style>.dtjohzbue {
  d: path("M5 17h14v3H5Z");
}

.ju4i6gx3w {
  d: path("M7 11h10v3H7Z");
}

.k-9q2cbvs {
  d: path("M5 5h14v3H5Z");
}

.l9ptwpbxd {
  fill: currentColor;
  d: path("M5 17h14v3H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ld-zqchrg {
  fill: currentColor;
  d: path("M5 5h14v3H5Z");
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

.rt55a5byn {
  fill: currentColor;
  d: path("M7 11h10v3H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ld-zqchrg"/><path class="rt55a5byn"/><path class="l9ptwpbxd"/><path class="k-9q2cbvs"/><path class="ju4i6gx3w"/><path class="dtjohzbue"/></g>`,
		"fallback": "iconmind:fold-clothes-duotone-regular",
	});
}

export default Component;
