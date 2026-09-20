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
		"content": `<style>.b9coo-b0i {
  d: path("M10.5 20v-9h5v9");
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.fabyocbbs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20v-5h5v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fjkpt106v {
  d: path("M3 20v-5h5v5");
}

.hrg--ibiw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 20V6h3v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i7tgsrb7i {
  d: path("M18 20V6h3v14");
}

.kakiz1beo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q0hoc8efb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10.5 20v-9h5v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="kakiz1beo"/><path class="fabyocbbs"/><path class="q0hoc8efb"/><path class="hrg--ibiw"/><path class="cjsg0ab2y"/><path class="fjkpt106v"/><path class="b9coo-b0i"/><path class="i7tgsrb7i"/></g>`,
		"fallback": "iconmind:beaufort-duotone-regular",
	});
}

export default Component;
