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
		"content": `<style>.ian165b6q {
  d: path("M3 12C3 7.029437 7.029437 3 12 3C16.970563 3 21 7.029437 21 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w9_kthb0l {
  fill: currentColor;
  d: path("M2 12C2 10.343146 3.343146 9 5 9L5 9C6.656854 9 8 10.343146 8 12L8 19C8 20.656854 6.656854 22 5 22L5 22C3.343146 22 2 20.656854 2 19ZM16 12C16 10.343146 17.343146 9 19 9L19 9C20.656854 9 22 10.343146 22 12L22 19C22 20.656854 20.656854 22 19 22L19 22C17.343146 22 16 20.656854 16 19Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="w9_kthb0l"/><path class="ian165b6q"/></g>`,
		"fallback": "keyline-icons:headphones-fill",
	});
}

export default Component;
