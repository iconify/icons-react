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
		"content": `<style>.btqpfca9b {
  d: path("M4.5 2.5h15v19h-15Zm6 16h3m-1.5-3v-5");
}

.s1air6t3e {
  d: path("M12 10.5c0-2.5-1.5-4-4.25-4c0 2.5 1.75 4 4.25 4Zm0 0c0-2.5 1.5-4 4.25-4c0 2.5-1.75 4-4.25 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="btqpfca9b"/><path class="s1air6t3e"/></g>`,
		"fallback": "uix-sharp:farmer-tablet",
	});
}

export default Component;
