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
		"content": `<style>.d84qmtbgz {
  width: 8px;
  height: 7px;
  x: 2.75px;
  y: 14.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hr74dlbru {
  width: 8px;
  height: 7px;
  x: 13.25px;
  y: 14.25px;
  rx: 1px;
}

.mijbvibik {
  d: path("M5.5 16.75v2m2.5-2v2");
}

.mjcmzysvq {
  d: path("M16 16.75v2m2.5-2v2");
}

.mz348jb2q {
  d: path("M10.5 6.75v2.5m3-2.5v2.5");
}

.s0l58-izb {
  width: 9px;
  height: 7.5px;
  x: 7.5px;
  y: 4.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="d84qmtbgz"/><path class="mijbvibik"/><rect class="hr74dlbru"/><path class="mjcmzysvq"/><rect class="s0l58-izb"/><path class="mz348jb2q"/></g>`,
		"fallback": "iconoven:container-stack",
	});
}

export default Component;
