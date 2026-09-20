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
		"content": `<style>.c-iufdcsb {
  fill: currentColor;
  d: path("m12 4 6 6 -6 6 -6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gnn1wob3e {
  d: path("M18 10h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.navc76bal {
  d: path("m12 4 6 6 -6 6 -6 -6Z");
}

.umugi_b9i {
  d: path("M3 10h3");
}
</style><g class="hntgybcog"><path class="c-iufdcsb"/><path class="navc76bal"/><path class="gnn1wob3e"/><path class="umugi_b9i"/></g>`,
		"fallback": "iconmind:condition-duotone-thin",
	});
}

export default Component;
