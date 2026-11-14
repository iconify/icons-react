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

.legud0bli {
  d: path("M2.5 4h19m-17 0v16.5M19.5 4v16.5m-17 0h19M8 20.5V12a4 4 0 0 1 8 0v8.5");
}

.zay-fdbbt {
  d: path("M12 12.25c1 1 1.5 2.5 1.5 4a1.5 1.5 0 0 1-3 0c0-1.5.5-3 1.5-4");
}
</style><g class="hntgybcog"><path class="legud0bli"/><path class="zay-fdbbt"/></g>`,
		"fallback": "uix:fireplace-surround",
	});
}

export default Component;
