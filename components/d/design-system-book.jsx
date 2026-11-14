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
		"content": `<style>.bn626dn5u {
  d: path("m12.53 7.595l.292.738a1.5 1.5 0 0 0 .845.845l.738.292a.57.57 0 0 1 0 1.06l-.738.292a1.5 1.5 0 0 0-.845.845l-.292.738a.57.57 0 0 1-1.06 0l-.292-.738a1.5 1.5 0 0 0-.845-.845l-.738-.292a.57.57 0 0 1 0-1.06l.738-.292a1.5 1.5 0 0 0 .845-.845l.292-.738a.57.57 0 0 1 1.06 0");
}

.d9ggfsbaf {
  d: path("M5 19.5v-15a2 2 0 0 1 2-2h12v19H7a2 2 0 0 1-2-2a2 2 0 0 1 2-2h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d9ggfsbaf"/><path class="bn626dn5u"/></g>`,
		"fallback": "uix:design-system-book",
	});
}

export default Component;
