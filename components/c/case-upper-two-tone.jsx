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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rxdjtqbaf {
  stroke-opacity: 0.4;
  d: path("M2 19L7 5L12 19M3.7857 14L10.2143 14");
}

.ygoapvnhp {
  d: path("M16 19L19 9L22 19M16.9 16L21.1 16");
}
</style><g class="nrj6p8qat"><path class="rxdjtqbaf"/><path class="ygoapvnhp"/></g>`,
		"fallback": "keyline-icons:case-upper-two-tone",
	});
}

export default Component;
