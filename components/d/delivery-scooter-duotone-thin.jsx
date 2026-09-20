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
		"content": `<style>.cz1n--5fo {
  fill: currentColor;
  d: path("M16 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.db6bvvb_j {
  d: path("M16 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.e3wgd0bct {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 16 4 -4h5V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f6186achz {
  d: path("M15 8h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm23m7ozc {
  fill: currentColor;
  d: path("M4 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.olph5u3xh {
  d: path("m8 16 4 -4h5V8");
}

.skyc_tbew {
  d: path("M4 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tyrhnvbzu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 8h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="jm23m7ozc"/><path class="cz1n--5fo"/><path class="e3wgd0bct"/><path class="tyrhnvbzu"/><path class="skyc_tbew"/><path class="db6bvvb_j"/><path class="olph5u3xh"/><path class="f6186achz"/></g>`,
		"fallback": "iconmind:delivery-scooter-duotone-thin",
	});
}

export default Component;
