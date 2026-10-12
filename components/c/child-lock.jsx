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

.kqp8bdpkm {
  width: 17px;
  height: 18.5px;
  x: 3.5px;
  y: 2.75px;
  rx: 2px;
}

.lkh5fbc6f {
  width: 6px;
  height: 5px;
  x: 9px;
  y: 11.5px;
  rx: 1.5px;
}

.s4pokskin {
  d: path("M12 2.75V5.5m0 12.75v3m-1.75-9.75V9.75a1.75 1.75 0 0 1 3.5 0v1.75");
}
</style><g class="hntgybcog"><rect class="kqp8bdpkm"/><path class="s4pokskin"/><rect class="lkh5fbc6f"/></g>`,
		"fallback": "iconoven:child-lock",
	});
}

export default Component;
