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
		"content": `<style>.kdybz_aht {
  d: path("M9 17h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.vslz5yb3q {
  d: path("M6 12h12");
}
</style><g class="nrj6p8qat"><path class="ozi-k-boi"/><path class="vslz5yb3q"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:funnel-step-outline-regular",
	});
}

export default Component;
