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
		"content": `<style>.b0695_86h {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 19h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d23kmtbkz {
  d: path("M9 7a3 3 0 0 1 -6 0");
}

.dl8beccds {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 7a3 3 0 0 1 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.efyfmvbkh {
  d: path("M21 7a3 3 0 0 1 -6 0");
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.kr89xrare {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 7a3 3 0 0 1 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uda6dfbwy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ujz4z0bsw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x5li7lwaz {
  d: path("M12 7v12");
}
</style><g class="s0phu2bbs"><path class="uda6dfbwy"/><path class="kr89xrare"/><path class="dl8beccds"/><path class="ujz4z0bsw"/><path class="b0695_86h"/><path class="ozi-k-boi"/><path class="d23kmtbkz"/><path class="efyfmvbkh"/><path class="x5li7lwaz"/><path class="jwnes9bsk"/></g>`,
		"fallback": "iconmind:bias-duotone-bold",
	});
}

export default Component;
