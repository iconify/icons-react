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
		"content": `<style>.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.m_xwosbxd {
  d: path("M16 14h4v3h-4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wmcm5nbzl {
  d: path("m6 4 10 10");
}
</style><g class="nrj6p8qat"><path class="wmcm5nbzl"/><path class="m_xwosbxd"/><path class="fg8libqda"/></g>`,
		"fallback": "iconmind:golf-outline-regular",
	});
}

export default Component;
