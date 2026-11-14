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
		"content": `<style>.gf_s4_b8u {
  d: path("M7 12.5v-6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6");
}

.u2mf_tb_m {
  d: path("M3 19v-6.5a2 2 0 0 1 4 0V15h10v-2.5a2 2 0 0 1 4 0V19Zm2 0v2m14-2v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gf_s4_b8u"/><path class="u2mf_tb_m"/></g>`,
		"fallback": "uix-sharp:armchair",
	});
}

export default Component;
