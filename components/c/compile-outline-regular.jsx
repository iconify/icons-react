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
		"content": `<style>.e5d_yrbyo {
  d: path("M12 13h9");
}

.l5r0hwbum {
  d: path("m18 10 3 3 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p1-4htbpj {
  d: path("m10 4 -6 6 6 6");
}
</style><g class="nrj6p8qat"><path class="p1-4htbpj"/><path class="e5d_yrbyo"/><path class="l5r0hwbum"/></g>`,
		"fallback": "iconmind:compile-outline-regular",
	});
}

export default Component;
