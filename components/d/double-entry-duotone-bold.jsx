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

.h7vr07ufd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j-lpysbbg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.5 14H19");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.o9ez59bqz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 5v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.snaqy9b-c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 10h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z0kumyy5w {
  d: path("M14.5 14H19");
}
</style><g class="s0phu2bbs"><path class="h7vr07ufd"/><path class="o9ez59bqz"/><path class="snaqy9b-c"/><path class="j-lpysbbg"/><path class="k6nj2fbya"/><path class="bg2ejdbaq"/><path class="b1ja9gnou"/><path class="z0kumyy5w"/></g>`,
		"fallback": "iconmind:double-entry-duotone-bold",
	});
}

export default Component;
