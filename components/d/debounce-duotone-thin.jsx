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
		"content": `<style>.e8mk-vdvn {
  d: path("M6 9v6");
}

.h26bvabki {
  d: path("M3 9v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lezox35rc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mhila7bcl {
  d: path("M20 7v10");
}

.rfy_enbzb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sxll69axz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 10 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tuynf1bdi {
  d: path("m15 10 2 2 -2 2");
}

.uuxi52b8u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wskxlyzso {
  d: path("M12 12h3");
}

.xz6bf05cf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y5k8b5bfa {
  d: path("M9 9v6");
}

.zitzxjbtk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="rfy_enbzb"/><path class="uuxi52b8u"/><path class="lezox35rc"/><path class="xz6bf05cf"/><path class="sxll69axz"/><path class="zitzxjbtk"/><path class="h26bvabki"/><path class="e8mk-vdvn"/><path class="y5k8b5bfa"/><path class="wskxlyzso"/><path class="tuynf1bdi"/><path class="mhila7bcl"/></g>`,
		"fallback": "iconmind:debounce-duotone-thin",
	});
}

export default Component;
