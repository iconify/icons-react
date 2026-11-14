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
		"content": `<style>.a50380bcv {
  d: path("M12.5 19.7v1.8h-9v-19h9v13.8");
}

.ituxvbblv {
  d: path("M6.5 7h3v6h-3Zm8.25 11l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a50380bcv"/><path class="ituxvbblv"/></g>`,
		"fallback": "uix-sharp:dock-available",
	});
}

export default Component;
