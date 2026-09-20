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
		"content": `<style>.hzsvawc8s {
  d: path("m8 8 -4 4 4 4");
}

.jka0cfj-k {
  d: path("M4 12h12");
}

.mhila7bcl {
  d: path("M20 7v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v0repaboa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys95wsbzg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zwfc0tbtb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zwfc0tbtb"/><path class="v0repaboa"/><path class="ys95wsbzg"/><path class="mhila7bcl"/><path class="jka0cfj-k"/><path class="hzsvawc8s"/></g>`,
		"fallback": "iconmind:arrow-left-from-line-duotone-regular",
	});
}

export default Component;
