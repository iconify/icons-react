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
		"content": `<style>.asi5lvc_x {
  d: path("m18 16 -2.5 2.5");
}

.e4ls9nbtg {
  d: path("M6 19h12v-3");
}

.lyyswacbl {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.opa9u3lld {
  d: path("M6 11h7");
}

.uxsptjbvt {
  d: path("M6 7h12");
}
</style><g class="nrj6p8qat"><path class="lyyswacbl"/><path class="uxsptjbvt"/><path class="opa9u3lld"/><path class="e4ls9nbtg"/><path class="asi5lvc_x"/></g>`,
		"fallback": "iconmind:certificate-rotate-outline-regular",
	});
}

export default Component;
