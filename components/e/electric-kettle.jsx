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
		"content": `<style>.dwnhvlaym {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 19h.01");
}

.j8r7m2bog {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.95 6.75h2.3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-1.7m-7.05-6v4.75");
}

.jgr7kxybo {
  width: 14.5px;
  height: 4.5px;
  x: 4.75px;
  y: 16.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.nyeeopnic {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.75h2.5m-4.5 2.5h5.5q1.5 0 1.63 1.49l.74 8.52q.13 1.49-1.37 1.49h-7.5q-1.5 0-1.37-1.49l.74-8.52q.13-1.49 1.63-1.49m-1.65 2l-3.85-2");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="nyeeopnic"/><path class="j8r7m2bog"/><rect class="jgr7kxybo"/><path class="dwnhvlaym"/></g>`,
		"fallback": "iconoven:electric-kettle",
	});
}

export default Component;
