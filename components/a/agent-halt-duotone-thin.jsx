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

.iyxi27jja {
  fill: currentColor;
  d: path("M13 13h8v8h-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lcsxh1bpq {
  d: path("M13 13h8v8h-8Z");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="iyxi27jja"/><path class="skbifdbcx"/><path class="lcsxh1bpq"/></g>`,
		"fallback": "iconmind:agent-halt-duotone-thin",
	});
}

export default Component;
