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
		"content": `<style>.dfvjg5biy {
  d: path("M11 6a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}

.hmity-bzw {
  d: path("M6 9.5 8.5 12 6 14.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qo1-4gbes {
  d: path("M3 12h5.5");
}
</style><g class="nrj6p8qat"><path class="dfvjg5biy"/><path class="qo1-4gbes"/><path class="hmity-bzw"/></g>`,
		"fallback": "iconmind:ingress-free-outline-regular",
	});
}

export default Component;
