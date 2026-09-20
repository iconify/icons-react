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
		"content": `<style>.aa-xam0us {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 7H3v10h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bv_xsgbxw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 7h3v10h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.im38brk4q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jq33rvbor {
  d: path("M6 7H3v10h3");
}

.ma01ysb5t {
  d: path("M18 7h3v10h-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="nrj6p8qat"><path class="aa-xam0us"/><path class="bv_xsgbxw"/><path class="im38brk4q"/><path class="jq33rvbor"/><path class="ma01ysb5t"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "iconmind:fasting-window-duotone-regular",
	});
}

export default Component;
