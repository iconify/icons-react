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

.i6clenrss {
  d: path("M2 16 12 6l10 10Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ydhsvyjzg {
  d: path("m12 10.5 2 2 -2 2 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="i6clenrss"/><path class="ydhsvyjzg"/><path class="hc7fbd-jo"/></g>`,
		"fallback": "iconmind:glamping-outline-regular",
	});
}

export default Component;
