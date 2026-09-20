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
		"content": `<style>.bp-bj-6is {
  fill: currentColor;
  d: path("M16 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e_6o-gbms {
  d: path("M6 10h13");
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h857n5bhq {
  d: path("M8 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.li29erb7r {
  fill: currentColor;
  d: path("M8 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qrffjub9u {
  d: path("M12 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.r3faxubne {
  d: path("M4 4v16");
}

.t164-vbgd {
  d: path("M16 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wmj0hybky {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 10h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zndks8byv {
  fill: currentColor;
  d: path("M12 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="li29erb7r"/><path class="zndks8byv"/><path class="bp-bj-6is"/><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="wmj0hybky"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e_6o-gbms"/><path class="h857n5bhq"/><path class="qrffjub9u"/><path class="t164-vbgd"/></g>`,
		"fallback": "iconmind:confidence-threshold-duotone-thin",
	});
}

export default Component;
