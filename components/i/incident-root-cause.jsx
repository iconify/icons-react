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
		"content": `<style>.tpgnznbfd {
  d: path("M3 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm17-4V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zom9f3pcg {
  d: path("M10 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3v3m-7 4v-4h14");
}
</style><g class="ulnmmdpxh"><path class="zom9f3pcg"/><path class="tpgnznbfd"/></g>`,
		"fallback": "uix-sharp:incident-root-cause",
	});
}

export default Component;
