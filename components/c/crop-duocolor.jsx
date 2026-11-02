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
		"content": `<style>.cpzkqbbnc {
  d: path("M6 3v13a2 2 0 0 0 2 2h13M3 6h3m12 12v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.owyd6db1y {
  stroke-opacity: 0.4;
  d: path("M10 6h6a2 2 0 0 1 2 2v6");
}
</style><g class="nrj6p8qat"><path class="owyd6db1y"/><path class="cpzkqbbnc"/></g>`,
		"fallback": "coolicons:crop-duocolor",
	});
}

export default Component;
