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

.tbgp-kb2l {
  d: path("m12.57 3.32l2.61 2.61q.57.57 0 1.14l-2.61 2.61q-.57.57-1.14 0L8.82 7.07q-.57-.57 0-1.14l2.61-2.61q.57-.57 1.14 0M12 10.25v2.25m-6 2.75V12.5h12v2.75");
}

.vd153n31u {
  width: 6.5px;
  height: 6px;
  x: 2.75px;
  y: 15.25px;
  rx: 1.75px;
}

.y7a80dsxw {
  width: 6.5px;
  height: 6px;
  x: 14.75px;
  y: 15.25px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><path class="tbgp-kb2l"/><rect class="vd153n31u"/><rect class="y7a80dsxw"/></g>`,
		"fallback": "iconoven:decision-tree-ai",
	});
}

export default Component;
