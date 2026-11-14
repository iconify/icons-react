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
		"content": `<style>.dv344qf1f {
  d: path("M3.5 13.5v-8a2 2 0 0 1 2-2h8");
}

.pbqudibor {
  d: path("M6.75 17V8.75a2 2 0 0 1 2-2H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgsxopb1j {
  d: path("M10 10h10.5v10.5H10Z");
}
</style><g class="ulnmmdpxh"><path class="vgsxopb1j"/><path class="pbqudibor"/><path class="dv344qf1f"/></g>`,
		"fallback": "uix-sharp:duplicate-multiple",
	});
}

export default Component;
