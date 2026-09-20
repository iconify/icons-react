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
		"content": `<style>.ko7vgklqj {
  d: path("m4 20 4 -4h6l-4 4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rki_rg93o {
  d: path("m12 12 4 -4h6l-4 4Z");
}

.uudyrgb2a {
  d: path("M2 21 21 2");
}
</style><g class="nrj6p8qat"><path class="uudyrgb2a"/><path class="ko7vgklqj"/><path class="rki_rg93o"/></g>`,
		"fallback": "iconmind:funicular-outline-regular",
	});
}

export default Component;
