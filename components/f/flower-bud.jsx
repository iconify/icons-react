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

.nm0apdcex {
  d: path("M12 17.5c-2.5 0-3.75-2.5-3.75-5m3.75 5c2.5 0 3.75-2.5 3.75-5");
}

.to9wgfbiz {
  d: path("M12 2.5c2 2.5 4.5 5 4.5 7.5a4.5 4.5 0 0 1-9 0c0-2.5 2.5-5 4.5-7.5m0 15v4");
}
</style><g class="hntgybcog"><path class="to9wgfbiz"/><path class="nm0apdcex"/></g>`,
		"fallback": "uix:flower-bud",
	});
}

export default Component;
