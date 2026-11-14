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
		"content": `<style>.yd6pfebmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm8-9.75v3.5m0 12.5v3.5M2.25 12h3.5m12.5 0h3.5M12 12h.01");
}
</style><path class="yd6pfebmm"/>`,
		"fallback": "uix-sharp:build-target",
	});
}

export default Component;
