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

.hu0hktgia {
  width: 6.5px;
  height: 4.75px;
  x: 13.75px;
  y: 11.75px;
  rx: 0.75px;
}

.i03tn_bow {
  d: path("M5 21.25V5m5.5 16.25V5M2.75 5h18.5M5 13l5.5-8M5 13h5.5M17 5v6");
}

.kg__uyb9b {
  d: path("M17 11.75v4.75");
}
</style><g class="hntgybcog"><path class="i03tn_bow"/><rect class="hu0hktgia"/><path class="kg__uyb9b"/></g>`,
		"fallback": "iconoven:container-crane",
	});
}

export default Component;
