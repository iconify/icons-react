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
		"content": `<style>.lsd9mobqp {
  d: path("M15.2 21.5H4.5v-19h15v9.7");
}

.rxrm-w6ld {
  d: path("m9.5 9l1.75 1.75L15.5 5.5M8 16h4m6-1v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulqk5ibbc {
  d: path("M7.5 6h6v6h-6Z");
}
</style><g class="ulnmmdpxh"><path class="lsd9mobqp"/><path class="ulqk5ibbc"/><path class="rxrm-w6ld"/></g>`,
		"fallback": "uix-sharp:ballot-paper-plus",
	});
}

export default Component;
