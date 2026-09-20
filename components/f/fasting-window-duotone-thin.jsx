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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq33rvbor {
  d: path("M6 7H3v10h3");
}

.ma01ysb5t {
  d: path("M18 7h3v10h-3");
}

.nwkidzbbg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 7H3v10h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sfrizzcif {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 7h3v10h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uxyzhxvwz {
  d: path("M7 12h10");
}

.x7ap30bft {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="nwkidzbbg"/><path class="sfrizzcif"/><path class="x7ap30bft"/><path class="jq33rvbor"/><path class="ma01ysb5t"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "iconmind:fasting-window-duotone-thin",
	});
}

export default Component;
