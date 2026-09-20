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
		"content": `<style>.jkqgno60a {
  d: path("M8.5 17a3.5 3.5 0 0 1 7 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pjcnnqbic {
  d: path("M16 5.07a8 8 0 1 1 -8 0");
}

.u52vfsbff {
  d: path("M5 4h3v3");
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="pjcnnqbic"/><path class="u52vfsbff"/><path class="xedmbxbzm"/><path class="jkqgno60a"/></g>`,
		"fallback": "iconmind:human-loop-outline-regular",
	});
}

export default Component;
