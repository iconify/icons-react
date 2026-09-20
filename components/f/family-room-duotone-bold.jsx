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
		"content": `<style>.kr6epu66n {
  d: path("M4 10V7h4v3");
}

.m724zy5bc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 15.5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n3wsbk_ds {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10V7h4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n7pu66d5h {
  d: path("M2 13.5h10");
}

.nd2j8pb7p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 13.5h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p-u3ngpfy {
  d: path("M15 15.5h7");
}

.qg3b3u-3z {
  d: path("M2 18v-8h10v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sg37fu_dx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 18v-5h7v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uobswubeq {
  d: path("M15 18v-5h7v5");
}

.z19ynguch {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18v-8h10v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="z19ynguch"/><path class="nd2j8pb7p"/><path class="n3wsbk_ds"/><path class="sg37fu_dx"/><path class="m724zy5bc"/><path class="qg3b3u-3z"/><path class="n7pu66d5h"/><path class="kr6epu66n"/><path class="uobswubeq"/><path class="p-u3ngpfy"/></g>`,
		"fallback": "iconmind:family-room-duotone-bold",
	});
}

export default Component;
