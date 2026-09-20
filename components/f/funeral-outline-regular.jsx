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
		"content": `<style>.a5yfw13jk {
  d: path("M6 21V10c0 -5 12 -5 12 0v11Z");
}

.kdybz_aht {
  d: path("M9 17h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="nrj6p8qat"><path class="a5yfw13jk"/><path class="zka_zabrc"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:funeral-outline-regular",
	});
}

export default Component;
