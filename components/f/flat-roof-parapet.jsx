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
		"content": `<style>.ix_0itb3y {
  d: path("M4.5 21.5v-18h15v18m-17 0h19m-17-14h15");
}

.lus0srido {
  d: path("M10 21.5V15h4v6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ix_0itb3y"/><path class="lus0srido"/></g>`,
		"fallback": "uix-sharp:flat-roof-parapet",
	});
}

export default Component;
