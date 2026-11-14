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
		"content": `<style>.joceyq6qi {
  d: path("M6 12h6m-6 3.5h3.5");
}

.p8-a_tb_z {
  fill: currentColor;
  d: path("M15 4.5h4.5a2 2 0 0 1 2 2V11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="p8-a_tb_z"/><path class="joceyq6qi"/></g>`,
		"fallback": "uix-sharp:cell-comment",
	});
}

export default Component;
