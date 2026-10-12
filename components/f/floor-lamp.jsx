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
		"content": `<style>.aetny_bbi {
  d: path("M7.5 20.75V8.5a4.75 4.75 0 0 1 9.5 0V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xma48ubfn {
  d: path("M13.5 12.5a3.5 3.5 0 0 1 7 0ZM4.75 21h5.5");
}
</style><g class="hntgybcog"><path class="aetny_bbi"/><path class="xma48ubfn"/></g>`,
		"fallback": "iconoven:floor-lamp",
	});
}

export default Component;
