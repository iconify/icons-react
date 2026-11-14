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
		"content": `<style>.pzldsibxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 16.5h-10V7H20v5.6M6 7V2.5M16.5 7V2.5m-10 9.25h.01M15 18l3.5-3l3.5 3v3.5h-7Z");
}
</style><path class="pzldsibxd"/>`,
		"fallback": "uix-sharp:gateway-box",
	});
}

export default Component;
