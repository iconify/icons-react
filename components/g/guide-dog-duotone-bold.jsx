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
		"content": `<style>.avtblzbgk {
  d: path("M6 20v-7h10v7");
}

.b00xxu-nn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 13V7h5v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.df8exkb3c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 13 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.krhtkbcno {
  d: path("m6 13 -3 -3");
}

.midjlmbqm {
  d: path("m16 7 -3 -3");
}

.nie_edcrf {
  d: path("M16 13V7h5v4");
}

.npyvz1bww {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 7 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkcew_bzu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 20v-7h10v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rkcew_bzu"/><path class="b00xxu-nn"/><path class="npyvz1bww"/><path class="df8exkb3c"/><path class="avtblzbgk"/><path class="nie_edcrf"/><path class="midjlmbqm"/><path class="krhtkbcno"/></g>`,
		"fallback": "iconmind:guide-dog-duotone-bold",
	});
}

export default Component;
