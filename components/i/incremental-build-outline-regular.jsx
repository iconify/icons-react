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
		"content": `<style>.b0hkzgbgd {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.jtt8g10_o {
  d: path("M9 10h6");
}

.nb_catcjy {
  d: path("M12 7v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="nrj6p8qat"><path class="b0hkzgbgd"/><path class="wuk2mlziz"/><path class="nb_catcjy"/><path class="jtt8g10_o"/></g>`,
		"fallback": "iconmind:incremental-build-outline-regular",
	});
}

export default Component;
