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
		"content": `<style>.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hv8dfzbkg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m6 18 6 -6 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mh897ob8c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15.5 5H19v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.u27h90bpp {
  d: path("m6 18 6 -6 7 -7");
}

.yqoazhbqh {
  d: path("M15.5 5H19v3.5");
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="hv8dfzbkg"/><path class="mh897ob8c"/><path class="qe97cg-lx"/><path class="u27h90bpp"/><path class="yqoazhbqh"/></g>`,
		"fallback": "iconmind:forecast-spend-duotone-regular",
	});
}

export default Component;
