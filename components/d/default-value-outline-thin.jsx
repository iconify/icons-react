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

.m_ifpmwzr {
  d: path("M4 12h6");
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.oe-98mb0w {
  d: path("M12 6v12");
}

.zwn7edcbm {
  d: path("M16 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="nnzlfsekh"/><path class="oe-98mb0w"/><path class="m_ifpmwzr"/><path class="zwn7edcbm"/></g>`,
		"fallback": "iconmind:default-value-outline-thin",
	});
}

export default Component;
