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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8hbe6atr {
  d: path("M14 9v7.5");
}

.uc38txb3u {
  d: path("M8.5 16.5h7");
}

.wqx96pbyf {
  d: path("M10 12v4.5");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="wqx96pbyf"/><path class="p8hbe6atr"/><path class="uc38txb3u"/></g>`,
		"fallback": "iconmind:document-chart-duotone-thin",
	});
}

export default Component;
