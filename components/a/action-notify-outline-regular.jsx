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
		"content": `<style>.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.m_812vyum {
  d: path("M6 12v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qml-hybqn {
  d: path("M18 12v4");
}

.tp8vjxbvr {
  d: path("M6 12a6 6 0 0 1 12 0");
}

.u4sowhi7h {
  d: path("M4 16h16");
}
</style><g class="nrj6p8qat"><path class="tp8vjxbvr"/><path class="m_812vyum"/><path class="qml-hybqn"/><path class="u4sowhi7h"/><path class="if5ft31dv"/></g>`,
		"fallback": "iconmind:action-notify-outline-regular",
	});
}

export default Component;
