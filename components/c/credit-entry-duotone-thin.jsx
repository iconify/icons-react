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
		"content": `<style>.bg2ejdbaq {
  d: path("M12 5v16");
}

.c0ny08jrw {
  fill: currentColor;
  d: path("M14.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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

.okqksmbze {
  d: path("M14.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.znhw8kbaa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="c0ny08jrw"/><path class="ck7sgubpk"/><path class="znhw8kbaa"/><path class="k6nj2fbya"/><path class="bg2ejdbaq"/><path class="okqksmbze"/></g>`,
		"fallback": "iconmind:credit-entry-duotone-thin",
	});
}

export default Component;
