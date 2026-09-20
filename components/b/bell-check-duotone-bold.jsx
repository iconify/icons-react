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
		"content": `<style>.hpm6v1-ys {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jdqylbbkf {
  d: path("m9 14 2 2 4 -4");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.vamrmexbl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 14 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yt70p9btb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yt70p9btb"/><path class="hpm6v1-ys"/><path class="vamrmexbl"/><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="jdqylbbkf"/></g>`,
		"fallback": "iconmind:bell-check-duotone-bold",
	});
}

export default Component;
