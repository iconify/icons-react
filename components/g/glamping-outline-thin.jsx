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
		"content": `<style>.hc7fbd-jo {
  d: path("M4 19h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6clenrss {
  d: path("M2 16 12 6l10 10Z");
}

.ydhsvyjzg {
  d: path("m12 10.5 2 2 -2 2 -2 -2Z");
}
</style><g class="hntgybcog"><path class="i6clenrss"/><path class="ydhsvyjzg"/><path class="hc7fbd-jo"/></g>`,
		"fallback": "iconmind:glamping-outline-thin",
	});
}

export default Component;
