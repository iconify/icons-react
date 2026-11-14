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
		"content": `<style>.a1exfaclq {
  d: path("M15 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.s-iw93b_k {
  d: path("M2.5 10.5h9v5h-9Zm9 2.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM7 10.5V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s-iw93b_k"/><path class="a1exfaclq"/></g>`,
		"fallback": "uix-sharp:angle-grinder",
	});
}

export default Component;
