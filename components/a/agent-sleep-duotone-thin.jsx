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
		"content": `<style>.d0vyaobih {
  d: path("M13 12h8l-8 8h8");
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

.ognd03okz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 12h8l-8 8h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="ft030md1w"/><path class="ognd03okz"/><path class="skbifdbcx"/><path class="d0vyaobih"/></g>`,
		"fallback": "iconmind:agent-sleep-duotone-thin",
	});
}

export default Component;
