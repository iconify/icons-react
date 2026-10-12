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
		"content": `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-s_5xbhs {
  d: path("M12 7.25V12l-3 2m5.75 5.5a3.25 3.25 0 0 1 6.5 0m-3.25 0l-2-1.25");
}
</style><g class="hntgybcog"><path class="dldnhmbjp"/><path class="w-s_5xbhs"/></g>`,
		"fallback": "iconoven:clock-slow",
	});
}

export default Component;
