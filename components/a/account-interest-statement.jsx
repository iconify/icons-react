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
		"content": `<style>.cwig654yk {
  d: path("M15.25 13.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.grsz58boa {
  d: path("M13.2 18.5H2.5v-15h19v6m-15-2h.01m4.99 6h.01M6 13.5l6-6m3-.5h3.5");
}

.n9l13tbyc {
  d: path("m16.25 16l-.5 5l2-1.25m2-3.75l.5 5l-2-1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="grsz58boa"/><path class="cwig654yk"/><path class="n9l13tbyc"/></g>`,
		"fallback": "uix-sharp:account-interest-statement",
	});
}

export default Component;
