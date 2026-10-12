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

.vfo4d25pu {
  d: path("M2.75 6.5L21.25 3M12 4.75V8");
}

.y0zz3i_np {
  d: path("M5.75 13.5h12.5M12 8v5.5");
}

.yfj36m-oc {
  width: 12.5px;
  height: 12.75px;
  x: 5.75px;
  y: 8px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="vfo4d25pu"/><rect class="yfj36m-oc"/><path class="y0zz3i_np"/></g>`,
		"fallback": "iconoven:cable-car",
	});
}

export default Component;
