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
		"content": `<style>.csfbqc4lr {
  d: path("M12 17v-5");
}

.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.hrjweb57d {
  d: path("m9 15 3 -3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}
</style><g class="nrj6p8qat"><path class="d8z1r1beo"/><path class="wzx0dxb2r"/><path class="csfbqc4lr"/><path class="hrjweb57d"/></g>`,
		"fallback": "iconmind:cd-outline-regular",
	});
}

export default Component;
