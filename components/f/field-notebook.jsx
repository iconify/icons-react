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
		"content": `<style>.ec-ybbg0c {
  d: path("M12 6c-2.5-1.5-6-1.5-9.5-.5v13c3.5-1 7-1 9.5.5c2.5-1.5 6-1.5 9.5-.5v-13c-3.5-1-7-1-9.5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sd-ig5n7f {
  d: path("m8.219 12.451l5.269-3.042a1.5 1.5 0 0 1 .775-.201l1.043.017a.875.875 0 0 1 .75 1.3l-.506.911a1.5 1.5 0 0 1-.562.571l-5.269 3.042A1.5 1.5 0 0 1 7.67 14.5a1.5 1.5 0 0 1 .549-2.049m5.629-3.25l1.5 2.598");
}
</style><g class="hntgybcog"><path class="ec-ybbg0c"/><path class="sd-ig5n7f"/></g>`,
		"fallback": "uix:field-notebook",
	});
}

export default Component;
