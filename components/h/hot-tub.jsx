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
		"content": `<style>.cmrmi4bji {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.25h18.5");
}

.ua0mrxbmt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.75c-.75.85-.75 1.65 0 2.5s.75 1.65 0 2.5m4.5-5c-.75.85-.75 1.65 0 2.5s.75 1.65 0 2.5m4.5-5c-.75.85-.75 1.65 0 2.5s.75 1.65 0 2.5");
}

.vmlufcc6h {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 10.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.xgia8cbty {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 17.75h.01m3.99 0h.01m3.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ua0mrxbmt"/><rect class="vmlufcc6h"/><path class="cmrmi4bji"/><path class="xgia8cbty"/></g>`,
		"fallback": "iconoven:hot-tub",
	});
}

export default Component;
