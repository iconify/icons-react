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
		"content": `<style>.dhm9wy0nm {
  d: path("M3 5h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o50_pabww {
  d: path("m16 12 2 2 4 -4");
}

.o8scmcc3i {
  d: path("M3 12h10");
}

.uxy9sxbfx {
  d: path("M3 19h10");
}
</style><g class="nrj6p8qat"><path class="dhm9wy0nm"/><path class="o8scmcc3i"/><path class="uxy9sxbfx"/><path class="o50_pabww"/></g>`,
		"fallback": "iconmind:best-of-n-outline-regular",
	});
}

export default Component;
