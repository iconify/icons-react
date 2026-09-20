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
		"content": `<style>.c-hbuyb5n {
  d: path("M4 7c1.5 2 3.5 2 5 0 1.5 2 3.5 2 5 0 1.5 2 3.5 2 5 0");
}

.cnhayvjyz {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mc1omvbiw {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.n887hrq4r {
  d: path("M7 17h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cnhayvjyz"/><path class="mc1omvbiw"/><path class="c-hbuyb5n"/><path class="n-7t0yb1r"/><path class="n887hrq4r"/></g>`,
		"fallback": "iconmind:event-calendar-duotone-regular",
	});
}

export default Component;
