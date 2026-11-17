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
		"content": `<style>.ch85560ac {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 9v12H4V9Zm4 4h2.667l.889 2.222l-1.334 1.334l2.222 2.222l1.334-1.334l2.222.889V21h-.889A7.11 7.11 0 0 1 13 13.889Z");
}

.ft5dv1b6b {
  fill: none;
}

.lvynv7bfx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 21H4V5h16v4M8 3v2m8-2v2M4 9h16m-7 4.889V13h2.667l.889 2.222l-1.334 1.334l2.222 2.222l1.334-1.334l2.222.89V21h-.889A7.11 7.11 0 0 1 13 13.889");
}
</style><g class="ft5dv1b6b"><path class="ch85560ac"/><path class="lvynv7bfx"/></g>`,
		"fallback": "coolicons:calendar-phone-corner-duotone-sharp",
	});
}

export default Component;
