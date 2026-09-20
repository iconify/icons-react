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
		"content": `<style>.aidevdbbz {
  fill: currentColor;
  d: path("M3 14h7l3 3 -3 3H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fo31dvbxr {
  d: path("M3 14h7l3 3 -3 3H3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.wmg5scbww {
  d: path("M17 14v6");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="aidevdbbz"/><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="fo31dvbxr"/><path class="wmg5scbww"/></g>`,
		"fallback": "iconmind:annotation-ui-duotone-thin",
	});
}

export default Component;
