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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.d1zyr9bfc {
  d: path("M12 4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lvnmieb7r {
  d: path("M5 10a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.xg6f7wbaz {
  fill: currentColor;
  d: path("M5 10a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="hntgybcog"><path class="xg6f7wbaz"/><path class="c7dgfu7wx"/><path class="d1zyr9bfc"/><path class="lvnmieb7r"/><path class="y07a50u1t"/></g>`,
		"fallback": "iconmind:cable-car-duotone-thin",
	});
}

export default Component;
