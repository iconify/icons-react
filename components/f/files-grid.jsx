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
		"content": `<style>.d9rsgr4ju {
  d: path("M8.25 2.75h7.5l4.5 4.5v10.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugca6mbad {
  d: path("M12.25 5.75h-6a2.5 2.5 0 0 0-2.5 2.5v10.5a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-9Z");
}
</style><g class="hntgybcog"><path class="ugca6mbad"/><path class="d9rsgr4ju"/></g>`,
		"fallback": "iconoven:files-grid",
	});
}

export default Component;
