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
		"content": `<style>.mip8t82lm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19v15h-19Zm0 5h19m-19 5h19M12 4.5v5m-4.75 0v5m9.5-5v5m-4.75 0v5");
}
</style><path class="mip8t82lm"/>`,
		"fallback": "uix-sharp:firewall-box",
	});
}

export default Component;
