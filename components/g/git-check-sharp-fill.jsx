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
		"content": `<style>.duuhr1boc {
  fill: currentColor;
  d: path("M6 2C8.0711 2 10 3.9289 10 6C10 8.0711 8.0711 10 6 10C3.9289 10 2 8.0711 2 6C2 3.9289 3.9289 2 6 2Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ht2kg9bpj {
  d: path("M6 22L6 8M18 14L18 6L12 6M15.7071 18.7071L18 21L21.1425 15.7625");
}
</style><g class="gp_8x1bzb"><path class="ht2kg9bpj"/><path class="duuhr1boc"/></g>`,
		"fallback": "keyline-icons:git-check-sharp-fill",
	});
}

export default Component;
