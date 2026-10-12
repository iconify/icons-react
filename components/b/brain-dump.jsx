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
		"content": `<style>.cc9ufsbna {
  d: path("M12 4.75a3.5 3.5 0 0 0-6.5 1.5a3.5 3.5 0 0 0-1.75 5a4 4 0 0 0 .75 5.5a4 4 0 0 0 4 4a3 3 0 0 0 3.5-1a3 3 0 0 0 3.5 1a4 4 0 0 0 4-4a4 4 0 0 0 .75-5.5a3.5 3.5 0 0 0-1.75-5a3.5 3.5 0 0 0-6.5-1.5m0 0v15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ny7i8e8_a {
  d: path("M6 12.5c1.5 0 2.75-1 2.75-2.5M18 12.5c-1.5 0-2.75-1-2.75-2.5m-6.5 5.25c-.9.3-1.5 1-1.5 2m8-2c.9.3 1.5 1 1.5 2");
}
</style><g class="hntgybcog"><path class="cc9ufsbna"/><path class="ny7i8e8_a"/></g>`,
		"fallback": "iconoven:brain-dump",
	});
}

export default Component;
