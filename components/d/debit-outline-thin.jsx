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
		"content": `<style>.bb_62lblh {
  d: path("M5.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bg2ejdbaq {
  d: path("M12 5v16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="bg2ejdbaq"/><path class="bb_62lblh"/></g>`,
		"fallback": "iconmind:debit-outline-thin",
	});
}

export default Component;
