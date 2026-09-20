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

.uwjz-dbef {
  d: path("m9 12 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="uwjz-dbef"/></g>`,
		"fallback": "iconmind:document-check-outline-thin",
	});
}

export default Component;
