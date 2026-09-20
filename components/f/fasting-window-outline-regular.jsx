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
		"content": `<style>.jq33rvbor {
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
</style><g class="nrj6p8qat"><path class="jq33rvbor"/><path class="ma01ysb5t"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "iconmind:fasting-window-outline-regular",
	});
}

export default Component;
