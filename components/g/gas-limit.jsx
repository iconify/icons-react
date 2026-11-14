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
		"content": `<style>.jew5zttbn {
  d: path("M12.2 19.5H3.5V3h9v12.2m-10 4.3h9.7m.3-11h2A1.5 1.5 0 0 1 16 10v3a1.5 1.5 0 0 0 3 0V7.5L16.5 5");
}

.po8vcmbgr {
  d: path("M6.25 6.25h3.5v3.5h-3.5ZM15 18h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jew5zttbn"/><path class="po8vcmbgr"/></g>`,
		"fallback": "uix-sharp:gas-limit",
	});
}

export default Component;
