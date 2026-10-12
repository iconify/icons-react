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
		"content": `<style>.fepgsabyj {
  d: path("M5.5 21.25V18.5h2v2.75m3.5 0V18.5h2v2.75m3.5 0V18.5h2v2.75");
}

.o0ktwi0vi {
  d: path("M2.75 20.75V7.5H5v3h2.25v3H9.5v3h5v-3h2.25v-3H19v-3h2.25v13.75H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o0ktwi0vi"/><path class="fepgsabyj"/></g>`,
		"fallback": "iconoven:arena-sharp",
	});
}

export default Component;
