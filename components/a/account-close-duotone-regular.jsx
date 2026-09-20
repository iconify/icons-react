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
		"content": `<style>.hkya4sbht {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 12 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hort14fyq {
  d: path("m15 12 -6 6");
}

.k5ecbgu2w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nood30b4z {
  d: path("m9 12 6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o4ybt7vrs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 12 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="k5ecbgu2w"/><path class="hkya4sbht"/><path class="o4ybt7vrs"/><path class="mcubrkb2y"/><path class="nood30b4z"/><path class="hort14fyq"/></g>`,
		"fallback": "iconmind:account-close-duotone-regular",
	});
}

export default Component;
