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
		"content": `<style>.hsljpwbfc {
  d: path("M6 13.5a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2V16a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.j2iebkbix {
  d: path("M15.5 16a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="nrj6p8qat"><path class="qe97cg-lx"/><path class="hsljpwbfc"/><path class="j2iebkbix"/></g>`,
		"fallback": "iconmind:bin-pack-outline-regular",
	});
}

export default Component;
