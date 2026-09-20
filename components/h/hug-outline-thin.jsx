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
		"content": `<style>.a9vo92b3c {
  d: path("M2 20v-3a4.5 4.5 0 0 1 9 0v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q9l06zbkl {
  d: path("M13 20v-3a4.5 4.5 0 0 1 9 0v3");
}

.txl-1ha9s {
  d: path("M14.5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.w5km8ibkz {
  d: path("M3.5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="w5km8ibkz"/><path class="txl-1ha9s"/><path class="a9vo92b3c"/><path class="q9l06zbkl"/></g>`,
		"fallback": "iconmind:hug-outline-thin",
	});
}

export default Component;
