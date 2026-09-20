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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9_-r5bkt {
  d: path("M17 7c3 3 3 7 0 10");
}

.oxemtublz {
  d: path("M7 7c-3 3 -3 7 0 10");
}

.wfyw8dbnu {
  fill: currentColor;
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="wfyw8dbnu"/><path class="enrpg0aoq"/><path class="oxemtublz"/><path class="j9_-r5bkt"/></g>`,
		"fallback": "iconmind:event-live-duotone-thin",
	});
}

export default Component;
