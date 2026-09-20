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
		"content": `<style>.b1ja9gnou {
  d: path("M5 10h4.5");
}

.bg2ejdbaq {
  d: path("M12 5v16");
}

.c8aozj6tk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 10h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ck7sgubpk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.u8fmtulhw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 14H19");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z0kumyy5w {
  d: path("M14.5 14H19");
}

.znhw8kbaa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ck7sgubpk"/><path class="znhw8kbaa"/><path class="c8aozj6tk"/><path class="u8fmtulhw"/><path class="k6nj2fbya"/><path class="bg2ejdbaq"/><path class="b1ja9gnou"/><path class="z0kumyy5w"/></g>`,
		"fallback": "iconmind:double-entry-duotone-thin",
	});
}

export default Component;
