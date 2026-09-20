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
		"content": `<style>.dm_hjfeqr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 17 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ibthacczf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 10h4l3 -3 3 3 3 -3 3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.njnsi8bel {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 14h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nz19jcivh {
  d: path("M2 10h4l3 -3 3 3 3 -3 3 3h4");
}

.ov7kkt0lo {
  d: path("m8 17 4 4 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vxy4ztabh {
  d: path("M4 14h16");
}
</style><g class="s0phu2bbs"><path class="ibthacczf"/><path class="dm_hjfeqr"/><path class="njnsi8bel"/><path class="nz19jcivh"/><path class="ov7kkt0lo"/><path class="vxy4ztabh"/></g>`,
		"fallback": "iconmind:earthquake-duotone-bold",
	});
}

export default Component;
