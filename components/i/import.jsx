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
		"content": `<style>.g0o42lu3z {
  d: path("m9 11.5l3 3l3-3");
}

.mw0u8cbll {
  d: path("M7.5 8.5h-1A2.5 2.5 0 0 0 4 11v6.5A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V11a2.5 2.5 0 0 0-2.5-2.5h-1M12 3v11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mw0u8cbll"/><path class="g0o42lu3z"/></g>`,
		"fallback": "uix-sharp:import",
	});
}

export default Component;
