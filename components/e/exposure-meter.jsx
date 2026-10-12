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
		"content": `<style>.cs185qb-c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14h.01");
}

.e0il_7__t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16.5a8.5 8.5 0 0 1 17 0ZM12 14l2.25-3.25");
}

.f25x8hzed {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20h14");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="e0il_7__t"/><path class="cs185qb-c"/><path class="f25x8hzed"/></g>`,
		"fallback": "iconoven:exposure-meter",
	});
}

export default Component;
