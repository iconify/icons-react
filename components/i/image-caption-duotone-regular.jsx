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
		"content": `<style>.c2uc-tfxb {
  d: path("M5 20.5h9");
}

.lyyswacbl {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p0hi_9aen {
  d: path("M5 17h14");
}

.uhkv12boy {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x6s5o0ble {
  d: path("m6 11 4 -4 3 3 4 -4");
}
</style><g class="nrj6p8qat"><path class="uhkv12boy"/><path class="lyyswacbl"/><path class="x6s5o0ble"/><path class="p0hi_9aen"/><path class="c2uc-tfxb"/></g>`,
		"fallback": "iconmind:image-caption-duotone-regular",
	});
}

export default Component;
