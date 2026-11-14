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
		"content": `<style>.kk5i0abie {
  d: path("M2.5 9L21 3.5v18M2.75 17.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.qi224cc5k {
  d: path("M6.25 17.75h4.25l3-5.25l1.75 5.25");
}

.qqp7x7bgm {
  d: path("M11.75 17.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnegxmcgs {
  d: path("m6.25 17.75l2.5-5.25h4.75m-4.75 0V11M7.5 11H10m3.5 1.5l-.5-1.75h1.75");
}
</style><g class="ulnmmdpxh"><path class="kk5i0abie"/><path class="qqp7x7bgm"/><path class="qi224cc5k"/><path class="xnegxmcgs"/></g>`,
		"fallback": "uix-sharp:bike-storage",
	});
}

export default Component;
