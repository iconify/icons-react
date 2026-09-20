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
		"content": `<style>.c19ia0bqf {
  d: path("M3 13h3");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.e6eq72cni {
  d: path("M3 17h3");
}

.h-fyw90ib {
  d: path("M16 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pdamdwx-i {
  d: path("M13 19c-2.5 0 -4.5 -2 -4.5 -4s2 -3.5 4.5 -3.5 4.5 1.5 4.5 3.5 -2 4 -4.5 4");
}

.zg6lybc6r {
  d: path("M12 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="pdamdwx-i"/><path class="c4o3x9bhp"/><path class="zg6lybc6r"/><path class="h-fyw90ib"/><path class="c19ia0bqf"/><path class="e6eq72cni"/></g>`,
		"fallback": "iconmind:dog-walk-outline-regular",
	});
}

export default Component;
