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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izycrzbmp {
  d: path("M16 14h3");
}

.kevu0gbpg {
  d: path("M14 13a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="skbifdbcx"/><path class="kevu0gbpg"/><path class="izycrzbmp"/></g>`,
		"fallback": "iconmind:agent-phone-outline-thin",
	});
}

export default Component;
