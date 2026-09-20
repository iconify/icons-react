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
		"content": `<style>.cvlbo4bhq {
  fill: currentColor;
  d: path("M3 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mq5ym9jqg {
  d: path("m13 11 5 -5");
}

.qqzww5fdw {
  d: path("m15.5 3.5 5 5");
}

.zgw90ybtt {
  d: path("M3 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="cvlbo4bhq"/><path class="zgw90ybtt"/><path class="mq5ym9jqg"/><path class="qqzww5fdw"/></g>`,
		"fallback": "iconmind:fault-inject-duotone-thin",
	});
}

export default Component;
