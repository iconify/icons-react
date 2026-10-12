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
		"content": `<style>.swqt6kboj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.6 1.45 4.4 3.15 5.5 5a2 2 0 0 0 1.4 3.75c.1.35.1.7.1 1c0 3.5-3 6-7 6s-7-2.5-7-6s2-7 7-9.75m0 15.75v2.75");
}

.u3p1kz5va {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.5 8.25h.01M8.75 13h.01m5.49 1h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="swqt6kboj"/><path class="u3p1kz5va"/></g>`,
		"fallback": "iconoven:crop-disease",
	});
}

export default Component;
