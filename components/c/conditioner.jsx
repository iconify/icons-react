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

.j8tytbbff {
  width: 8.5px;
  height: 12.75px;
  x: 3.75px;
  y: 8.5px;
  rx: 2.5px;
}

.q2j9owbjj {
  width: 5px;
  height: 2.75px;
  x: 5.5px;
  y: 2.75px;
  rx: 1px;
}

.y_amm84ko {
  d: path("M17.75 4.75c2.5 2.5 2.5 4.5 0 7s-2.5 4.5 0 7");
}
</style><g class="hntgybcog"><rect class="q2j9owbjj"/><rect class="j8tytbbff"/><path class="y_amm84ko"/></g>`,
		"fallback": "iconoven:conditioner",
	});
}

export default Component;
