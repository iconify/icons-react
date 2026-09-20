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
		"content": `<style>.bmsk64_re {
  d: path("M9.5 9.5 12 12");
}

.bzomfeb_l {
  fill: currentColor;
  d: path("M2.5 5.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cpc3z_b1u {
  fill: currentColor;
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kdmnrabtq {
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ro0ipo0zu {
  d: path("M14.5 11.5v3h-3");
}

.v4maambii {
  d: path("M2.5 5.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="bzomfeb_l"/><path class="cpc3z_b1u"/><path class="v4maambii"/><path class="bmsk64_re"/><path class="ro0ipo0zu"/><path class="kdmnrabtq"/></g>`,
		"fallback": "iconmind:delegate-duotone-regular",
	});
}

export default Component;
