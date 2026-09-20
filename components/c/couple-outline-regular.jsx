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
		"content": `<style>.a1ch8_mho {
  d: path("M12.5 18a4.5 4.5 0 0 1 9 0");
}

.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.kwvl-5zwd {
  d: path("M2.5 16a4.5 4.5 0 0 1 9 0");
}

.mtvwri8au {
  d: path("M14 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aj1uncbqw"/><path class="kwvl-5zwd"/><path class="mtvwri8au"/><path class="a1ch8_mho"/></g>`,
		"fallback": "iconmind:couple-outline-regular",
	});
}

export default Component;
