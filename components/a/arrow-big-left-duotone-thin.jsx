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
		"content": `<style>.cq4cz2bia {
  d: path("m3 12 9 -9v5h9v8h-9v5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r4vbc_6fl {
  fill: currentColor;
  d: path("m3 12 9 -9v5h9v8h-9v5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="r4vbc_6fl"/><path class="cq4cz2bia"/></g>`,
		"fallback": "iconmind:arrow-big-left-duotone-thin",
	});
}

export default Component;
