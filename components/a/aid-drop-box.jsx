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
		"content": `<style>.ffo-swptt {
  d: path("M12 15.75v3.5m-1.75-1.75h3.5");
}

.gwsam3bap {
  width: 9px;
  height: 8px;
  x: 7.5px;
  y: 13.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-e5pbu_e {
  d: path("M3.75 9.25a8.25 6.25 0 0 1 16.5 0Zm.75 0l3.75 4m11.25-4l-3.75 4");
}
</style><g class="hntgybcog"><path class="z-e5pbu_e"/><rect class="gwsam3bap"/><path class="ffo-swptt"/></g>`,
		"fallback": "iconoven:aid-drop-box",
	});
}

export default Component;
