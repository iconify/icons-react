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
		"content": `<style>.e9i5dwbzy {
  d: path("m10.5 13.5 3 -3");
}

.mddrthmzf {
  d: path("M3 16a4 4 0 0 1 8 0");
}

.pmogxi-9o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 12a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u60jrt8bc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10.5 13.5 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uga4rynme {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 16a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xa0iemevq {
  d: path("M13 12a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="uga4rynme"/><path class="pmogxi-9o"/><path class="u60jrt8bc"/><path class="mddrthmzf"/><path class="xa0iemevq"/><path class="e9i5dwbzy"/></g>`,
		"fallback": "iconmind:distribution-shift-duotone-bold",
	});
}

export default Component;
