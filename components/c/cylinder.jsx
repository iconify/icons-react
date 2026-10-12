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
		"content": `<style>.a9xbaebdi {
  d: path("M3.5 6v12a8.5 3.25 0 0 0 17 0V6a8.5 3.25 0 0 1-17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngdi4achx {
  d: path("M3.5 6a8.5 3.25 0 1 0 17 0a8.5 3.25 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="a9xbaebdi"/><path class="ngdi4achx"/></g>`,
		"fallback": "iconoven:cylinder",
	});
}

export default Component;
