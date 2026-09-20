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
		"content": `<style>.isrkj8blm {
  d: path("M3 17h13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.orxbg_b1j {
  d: path("M3 4h13");
}

.rdidnh2az {
  d: path("m10 11.5 2 2 2 -2");
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="nrj6p8qat"><path class="orxbg_b1j"/><path class="zuuudpbwi"/><path class="rdidnh2az"/><path class="isrkj8blm"/></g>`,
		"fallback": "iconmind:dedupe-fuzzy-outline-regular",
	});
}

export default Component;
