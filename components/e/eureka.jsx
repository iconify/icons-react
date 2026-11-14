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
		"content": `<style>.pdn2mijne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 19v-1.5a5.5 5.5 0 1 1 5 0V19Zm.5 2.75h4M12 2v2.25m-7.75.5L6 6.5m13.75-1.75L18 6.5");
}
</style><path class="pdn2mijne"/>`,
		"fallback": "uix-sharp:eureka",
	});
}

export default Component;
