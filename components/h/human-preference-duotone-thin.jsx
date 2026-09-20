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
		"content": `<style>.ai9szrl-y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 7a3 3 0 0 1 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d23kmtbkz {
  d: path("M9 7a3 3 0 0 1 -6 0");
}

.dkxdfrn3s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.efyfmvbkh {
  d: path("M21 7a3 3 0 0 1 -6 0");
}

.evty0vb8w {
  d: path("M5 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.mokr9feot {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o6hvby18z {
  fill: currentColor;
  d: path("M5 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.p6ki6eqhw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 19h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pb-knz02b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 7a3 3 0 0 1 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x5li7lwaz {
  d: path("M12 7v12");
}
</style><g class="hntgybcog"><path class="o6hvby18z"/><path class="dkxdfrn3s"/><path class="ai9szrl-y"/><path class="pb-knz02b"/><path class="mokr9feot"/><path class="p6ki6eqhw"/><path class="ozi-k-boi"/><path class="d23kmtbkz"/><path class="efyfmvbkh"/><path class="x5li7lwaz"/><path class="jwnes9bsk"/><path class="evty0vb8w"/></g>`,
		"fallback": "iconmind:human-preference-duotone-thin",
	});
}

export default Component;
