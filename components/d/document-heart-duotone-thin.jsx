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

.lndwygc_k {
  d: path("M8.5 11a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0L12 14.5Z");
}

.yqogwyb2h {
  fill: currentColor;
  d: path("M8.5 11a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0L12 14.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="yqogwyb2h"/><path class="abnm6smsv"/><path class="lndwygc_k"/></g>`,
		"fallback": "iconmind:document-heart-duotone-thin",
	});
}

export default Component;
