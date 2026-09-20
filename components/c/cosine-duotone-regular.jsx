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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.h4houcuor {
  d: path("M4 13a7 7 0 0 1 4.95 2.05");
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.salwrsb0n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 13a7 7 0 0 1 4.95 2.05");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x5i0m055t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="x5i0m055t"/><path class="iulb4mb6k"/><path class="salwrsb0n"/><path class="emvotkb4z"/><path class="oifr9zbpt"/><path class="h4houcuor"/></g>`,
		"fallback": "iconmind:cosine-duotone-regular",
	});
}

export default Component;
