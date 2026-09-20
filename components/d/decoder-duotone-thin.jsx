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
		"content": `<style>.hm5wf8bkx {
  d: path("m20 3 -6 6v6l6 6");
}

.hmleclbdj {
  d: path("m8 9 3 3 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ijf5g-qwb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t407ddc6o {
  d: path("M3 12h8");
}

.uxqyqmb7w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xav074jko {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m20 3 -6 6v6l6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="xav074jko"/><path class="ijf5g-qwb"/><path class="uxqyqmb7w"/><path class="hm5wf8bkx"/><path class="t407ddc6o"/><path class="hmleclbdj"/></g>`,
		"fallback": "iconmind:decoder-duotone-thin",
	});
}

export default Component;
