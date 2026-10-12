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
		"content": `<style>.h88mmbbly {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14h.01M12 17.5h.01");
}

.p-h0_9bvx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4q1.5 0 2.8.74l.9.52q1.3.74 1.37 2.24l.61 13.5q.07 1.5-1.43 1.5H5.75q-1.5 0-1.43-1.5l.61-13.5Q5 4.75 6.3 4.01l.9-.52q1.3-.74 2.8-.74");
}

.s085ieb8x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 3.25l3.25 7.5l3.25-7.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="p-h0_9bvx"/><path class="s085ieb8x"/><path class="h88mmbbly"/></g>`,
		"fallback": "iconoven:coat",
	});
}

export default Component;
