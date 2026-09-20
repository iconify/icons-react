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
		"content": `<style>.afo552p2d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cf7uocc2a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 4v5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dm5ccobgo {
  d: path("M12 12h4");
}

.intvnpcjd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kv86m5bsi {
  d: path("M3 4v5h5");
}

.mcj52c2nx {
  d: path("M12 3a9 9 0 1 1 -9 9");
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.r1oykbb0j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3a9 9 0 1 1 -9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="cf7uocc2a"/><path class="afo552p2d"/><path class="intvnpcjd"/><path class="r1oykbb0j"/><path class="kv86m5bsi"/><path class="pfpu_3ppl"/><path class="dm5ccobgo"/><path class="mcj52c2nx"/></g>`,
		"fallback": "iconmind:history-duotone-bold",
	});
}

export default Component;
