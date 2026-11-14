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
		"content": `<style>.ygx_aac0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v11M7.25 5.75l9.5 5.5m-9.5 0l9.5-5.5M12 17v4.5M9.5 19l2.5 2.5l2.5-2.5");
}
</style><path class="ygx_aac0c"/>`,
		"fallback": "uix-sharp:ac-cool-mode",
	});
}

export default Component;
