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
		"content": `<style>.e3aed6d4j {
  d: path("M14.11 7.47a5 5 0 1 1 -4.22 0");
}

.e69i7fcek {
  d: path("M17 12h5");
}

.l8unaacgj {
  d: path("M2 12h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.wskxlyzso {
  d: path("M12 12h3");
}
</style><g class="nrj6p8qat"><path class="l8unaacgj"/><path class="e3aed6d4j"/><path class="pfpu_3ppl"/><path class="wskxlyzso"/><path class="e69i7fcek"/></g>`,
		"fallback": "iconmind:delay-outline-regular",
	});
}

export default Component;
