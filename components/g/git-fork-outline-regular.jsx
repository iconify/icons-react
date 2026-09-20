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
		"content": `<style>.cq87c55hm {
  d: path("m12 11 -5.5 5.5");
}

.erxvlz1uk {
  d: path("m12 11 5.5 5.5");
}

.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.t2l4a8b-m {
  d: path("M12 7.5V11");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="ymw3aibdo"/><path class="fg8libqda"/><path class="pw61xnbei"/><path class="t2l4a8b-m"/><path class="cq87c55hm"/><path class="erxvlz1uk"/></g>`,
		"fallback": "iconmind:git-fork-outline-regular",
	});
}

export default Component;
