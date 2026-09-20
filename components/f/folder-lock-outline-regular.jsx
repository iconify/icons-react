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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.l9hu2h1fj {
  d: path("M9 12h6v5H9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tn8-gc8mv {
  d: path("M10 12a2 2 0 0 1 4 0");
}
</style><g class="nrj6p8qat"><path class="bn_pu6j-z"/><path class="l9hu2h1fj"/><path class="tn8-gc8mv"/></g>`,
		"fallback": "iconmind:folder-lock-outline-regular",
	});
}

export default Component;
