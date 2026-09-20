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
		"content": `<style>.dtz-m_d9g {
  d: path("M14 7h5a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-4l3 -3h5");
}

.f6ju-7bwe {
  fill: currentColor;
  d: path("M5 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.icz74sb8a {
  d: path("M5 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2");
}

.o9ieywvvi {
  fill: currentColor;
  d: path("M14 7h5a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-4l3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o9ieywvvi"/><path class="f6ju-7bwe"/><path class="dtz-m_d9g"/><path class="icz74sb8a"/></g>`,
		"fallback": "iconmind:gpu-util-duotone-bold",
	});
}

export default Component;
