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
		"content": `<style>.dkn4m7bqr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m14 13 -2.5 2.5L14 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dqu3vybkn {
  d: path("m14 13 -2.5 2.5L14 18");
}

.ft030md1w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpj6edf_o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m19 13 2.5 2.5L19 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.t8y3wdrkk {
  d: path("m19 13 2.5 2.5L19 18");
}
</style><g class="hntgybcog"><path class="ft030md1w"/><path class="dkn4m7bqr"/><path class="hpj6edf_o"/><path class="skbifdbcx"/><path class="dqu3vybkn"/><path class="t8y3wdrkk"/></g>`,
		"fallback": "iconmind:agent-code-duotone-thin",
	});
}

export default Component;
