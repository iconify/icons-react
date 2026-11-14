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
		"content": `<style>.bmj7y3blv {
  d: path("M2.5 4h19v3h-19Zm2 3v14.5h15V7");
}

.tf3uaub_f {
  d: path("M10.5 21.5v-5h3v5M7 9.75h10v3.5H7Zm5 0v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bmj7y3blv"/><path class="tf3uaub_f"/></g>`,
		"fallback": "uix-sharp:flat-roof",
	});
}

export default Component;
