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
		"content": `<style>.euckimbze {
  d: path("M9 8a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.g_dn-kxhf {
  d: path("M6 4h12v10H6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vjajq6_sv {
  fill: currentColor;
  d: path("M9 8a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="vjajq6_sv"/><path class="ftqzjnb8u"/><path class="g_dn-kxhf"/><path class="euckimbze"/></g>`,
		"fallback": "iconmind:favorite-milestone-duotone-regular",
	});
}

export default Component;
