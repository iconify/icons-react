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
		"content": `<style>.g38q07fcm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 17h5V7h6v10h6v-7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qfgxpvbvs {
  d: path("M6 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qrffjub9u {
  d: path("M12 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.r4indybxp {
  fill: currentColor;
  d: path("M18 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ujtuebbmd {
  fill: currentColor;
  d: path("M6 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vlo76ab2r {
  d: path("M2 17h5V7h6v10h6v-7");
}

.xcm-54bzl {
  d: path("M18 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zndks8byv {
  fill: currentColor;
  d: path("M12 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ujtuebbmd"/><path class="zndks8byv"/><path class="r4indybxp"/><path class="g38q07fcm"/><path class="vlo76ab2r"/><path class="qfgxpvbvs"/><path class="qrffjub9u"/><path class="xcm-54bzl"/></g>`,
		"fallback": "iconmind:circuit-duotone-thin",
	});
}

export default Component;
