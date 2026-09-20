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
		"content": `<style>.f5ulf0b1s {
  fill: currentColor;
  d: path("M13 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iopx9qkhf {
  d: path("M13 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.khp0b8bxr {
  d: path("M10.5 13h3");
}

.ou2rz6bri {
  d: path("m2 9 2 2");
}

.vo_28p0qr {
  d: path("m22 9 -2 2");
}

.zeqlezb3o {
  fill: currentColor;
  d: path("M2 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zwwtt2bhd {
  d: path("M2 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}
</style><g class="hntgybcog"><path class="zeqlezb3o"/><path class="f5ulf0b1s"/><path class="zwwtt2bhd"/><path class="iopx9qkhf"/><path class="khp0b8bxr"/><path class="ou2rz6bri"/><path class="vo_28p0qr"/></g>`,
		"fallback": "iconmind:eyeglasses-duotone-thin",
	});
}

export default Component;
