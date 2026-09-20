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

.btgulgn_a {
  d: path("M9 16.5V14l4.5 -4.5L16 12l-4.5 4.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rtkoyac5e {
  fill: currentColor;
  d: path("M9 16.5V14l4.5 -4.5L16 12l-4.5 4.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="rtkoyac5e"/><path class="abnm6smsv"/><path class="btgulgn_a"/></g>`,
		"fallback": "iconmind:document-edit-duotone-thin",
	});
}

export default Component;
