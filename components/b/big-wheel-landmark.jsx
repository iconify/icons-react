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
		"content": `<style>.fw2wxacdh {
  d: path("M10.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 2.5v15M4.5 10h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-mc7bkx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.v4gve_jid {
  d: path("m8 21l4-11l4 11");
}
</style><g class="ulnmmdpxh"><path class="v_-mc7bkx"/><path class="fw2wxacdh"/><path class="v4gve_jid"/></g>`,
		"fallback": "uix-sharp:big-wheel-landmark",
	});
}

export default Component;
