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

.ie2eafbvn {
  d: path("m11 9 -3 3 3 3");
}

.ug4kkubvk {
  d: path("m13 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="ie2eafbvn"/><path class="ug4kkubvk"/></g>`,
		"fallback": "iconmind:file-code-outline-thin",
	});
}

export default Component;
