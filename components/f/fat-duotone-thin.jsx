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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jbkyhg5ta {
  fill: currentColor;
  d: path("m3 12 5 -5h13v5l-5 5H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mi7lz24vf {
  d: path("m3 12 5 -5h13v5l-5 5H3Z");
}
</style><g class="hntgybcog"><path class="jbkyhg5ta"/><path class="mi7lz24vf"/></g>`,
		"fallback": "iconmind:fat-duotone-thin",
	});
}

export default Component;
