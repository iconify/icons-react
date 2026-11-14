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
		"content": `<style>.ak83g5bqx {
  d: path("M13.4 19H2.5V5h19v6.7m-19-2.2h19M6 15h3");
}

.bi_2y5bap {
  d: path("M15.5 14.5H21c0 3-1.5 4-2.75 4s-2.75-1-2.75-4Zm2.75 4v3m-2 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ak83g5bqx"/><path class="bi_2y5bap"/></g>`,
		"fallback": "uix-sharp:drinking-age",
	});
}

export default Component;
