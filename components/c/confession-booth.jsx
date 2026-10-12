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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3kjqcbth {
  d: path("M9.5 21.25V12.5a2.5 2.5 0 0 1 5 0v8.75M5.75 12h2m-2 2.25h2m-2 2.25h2m8.5-4.5h2m-2 2.25h2m-2 2.25h2");
}

.yo7d8abht {
  d: path("M12 6.5V2.75M10.75 4h2.5M4 20.65V9.35q0-.6-.6-.6h-.05q-.6 0-.6-.6V7.1q0-.6.6-.6h17.3q.6 0 .6.6v1.05q0 .6-.6.6h-.05q-.6 0-.6.6v11.3q0 .6-.6.6H4.6q-.6 0-.6-.6");
}
</style><g class="hntgybcog"><path class="yo7d8abht"/><path class="j3kjqcbth"/></g>`,
		"fallback": "iconoven:confession-booth",
	});
}

export default Component;
