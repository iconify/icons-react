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
		"content": `<style>.erreycbys {
  d: path("m12 13 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pc9haabcx {
  d: path("M5 13a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.syzpzeigb {
  d: path("m15 4 5 5");
}
</style><g class="nrj6p8qat"><path class="pc9haabcx"/><path class="erreycbys"/><path class="syzpzeigb"/></g>`,
		"fallback": "iconmind:cadence-outline-regular",
	});
}

export default Component;
