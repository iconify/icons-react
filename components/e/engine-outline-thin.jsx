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
		"content": `<style>.b5wqv3c3i {
  d: path("M2 13a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nudzxvbtj {
  d: path("M6 11V6h4v5");
}

.ojebq65vr {
  d: path("M13 11V4h4v7");
}
</style><g class="hntgybcog"><path class="b5wqv3c3i"/><path class="nudzxvbtj"/><path class="ojebq65vr"/></g>`,
		"fallback": "iconmind:engine-outline-thin",
	});
}

export default Component;
