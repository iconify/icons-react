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
		"content": `<style>.mxzl1tbmo {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.okxoay2_d {
  d: path("M9.25 9.5a2.75 6.5 0 1 0 5.5 0a2.75 6.5 0 1 0-5.5 0Zm-3.75 0h13M12 16v3m-4 2.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mxzl1tbmo"/><path class="okxoay2_d"/></g>`,
		"fallback": "uix-sharp:classroom-globe",
	});
}

export default Component;
