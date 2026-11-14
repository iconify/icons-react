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
		"content": `<style>.pnz9d-m6o {
  d: path("M5.75 8.75a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0Z");
}

.snz2ptb1w {
  d: path("M9.5 8.75a2.5 6.25 0 1 0 5 0a2.5 6.25 0 1 0-5 0Zm-3.75 0h12.5M12 15v2.5m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7 0h7m4 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pnz9d-m6o"/><path class="snz2ptb1w"/></g>`,
		"fallback": "uix-sharp:globe-network",
	});
}

export default Component;
