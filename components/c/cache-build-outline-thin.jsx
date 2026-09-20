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
		"content": `<style>.axz8bmb1c {
  d: path("M17 4v6");
}

.hmekf-bdm {
  d: path("M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i12kcgemc {
  d: path("m10 6.5 2 2 2 -2");
}

.nm1tlbreh {
  d: path("M7 4v6");
}

.v5srdkbdr {
  d: path("M12 2v3.5");
}
</style><g class="hntgybcog"><path class="hmekf-bdm"/><path class="nm1tlbreh"/><path class="v5srdkbdr"/><path class="i12kcgemc"/><path class="axz8bmb1c"/></g>`,
		"fallback": "iconmind:cache-build-outline-thin",
	});
}

export default Component;
