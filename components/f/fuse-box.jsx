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
		"content": `<style>.haz4ihblf {
  d: path("M8.75 12L10 10l2 4l2-4l1.25 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oss_qbbcs {
  width: 12.5px;
  height: 10px;
  x: 5.75px;
  y: 7px;
  rx: 2.5px;
}

.sht6hbb9p {
  d: path("M2.75 5.75v12.5m18.5-12.5v12.5");
}
</style><g class="hntgybcog"><path class="sht6hbb9p"/><rect class="oss_qbbcs"/><path class="haz4ihblf"/></g>`,
		"fallback": "iconoven:fuse-box",
	});
}

export default Component;
