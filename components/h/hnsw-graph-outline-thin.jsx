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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.fl42iabgs {
  d: path("M12 8.5V12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrjweb57d {
  d: path("m9 15 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="b5ic9acln"/><path class="hrjweb57d"/><path class="fl42iabgs"/></g>`,
		"fallback": "iconmind:hnsw-graph-outline-thin",
	});
}

export default Component;
