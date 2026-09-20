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
		"content": `<style>.a3ch5yb2h {
  d: path("M5 10h10");
}

.kj1tfs36l {
  d: path("M15 9c3 0 4 2 4 4s-1 4 -4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pmq4fab-l {
  d: path("M5 6h10v15H5Z");
}

.qlv1vmmbf {
  fill: currentColor;
  d: path("M5 6h10v15H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="qlv1vmmbf"/><path class="pmq4fab-l"/><path class="kj1tfs36l"/><path class="a3ch5yb2h"/></g>`,
		"fallback": "iconmind:beer-mug-duotone-regular",
	});
}

export default Component;
