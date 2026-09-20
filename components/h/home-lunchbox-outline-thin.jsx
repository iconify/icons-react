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
		"content": `<style>.ag9m5ebdy {
  d: path("M12 7v13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.inzib8bkh {
  d: path("M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.zthyqkbji {
  d: path("M12 13.5h9");
}
</style><g class="hntgybcog"><path class="inzib8bkh"/><path class="ag9m5ebdy"/><path class="zthyqkbji"/></g>`,
		"fallback": "iconmind:home-lunchbox-outline-thin",
	});
}

export default Component;
