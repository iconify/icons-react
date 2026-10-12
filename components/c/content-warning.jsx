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
		"content": `<style>.aqmj_4big {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.jgyfg-bpu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.75h.01");
}

.obz7kdb6f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.59 7.6l4.32 8.05q.59 1.1-.66 1.1h-8.5q-1.25 0-.66-1.1l4.32-8.05q.59-1.1 1.18 0M12 10.25v2.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="aqmj_4big"/><path class="obz7kdb6f"/><path class="jgyfg-bpu"/></g>`,
		"fallback": "iconoven:content-warning",
	});
}

export default Component;
