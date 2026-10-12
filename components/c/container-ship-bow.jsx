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

.hpzc38jcm {
  d: path("M7.75 9v3.5m4-3.5v3.5m-8-3.5h12m-12 3.5h12m2.5 0V5.25a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v7.25Zm-15.5 0h18.5l-1.75 3.9a1.75 1.75 0 0 1-1.62 1.1H6.12a1.75 1.75 0 0 1-1.62-1.1Zm0 8.75c1.25 0 1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75");
}

.r5ipwac6r {
  width: 12px;
  height: 3.5px;
  x: 3.75px;
  y: 5.5px;
  rx: 0.75px;
}

.voc2e0w9q {
  d: path("M7.75 5.5V9m4-3.5V9");
}

.vyhltj9ra {
  width: 12px;
  height: 3.5px;
  x: 3.75px;
  y: 9px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="r5ipwac6r"/><path class="voc2e0w9q"/><rect class="vyhltj9ra"/><path class="hpzc38jcm"/></g>`,
		"fallback": "iconoven:container-ship-bow",
	});
}

export default Component;
