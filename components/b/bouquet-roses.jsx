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
		"content": `<style>.hn43z_v3t {
  d: path("M6.5 4.5a3 3 0 0 1 0 6a3 3 0 0 1 0-6a1.5 1.5 0 0 0 0 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.syob-dbol {
  d: path("M12 2a3 3 0 0 1 0 6a3 3 0 0 1 0-6a1.5 1.5 0 0 0 0 3m5.5-.5a3 3 0 0 1 0 6a3 3 0 0 1 0-6a1.5 1.5 0 0 0 0 3m-11 3l8.5 11m2.5-11L9 21.5M12 8v13.5");
}
</style><g class="hntgybcog"><path class="hn43z_v3t"/><path class="syob-dbol"/></g>`,
		"fallback": "uix:bouquet-roses",
	});
}

export default Component;
