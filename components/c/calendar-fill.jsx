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
		"content": `<style>.e1i4hn8sv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 4H18C20.2091 4 22 5.79086 22 8V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V8C2 5.79086 3.79086 4 6 4ZM7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ypi7oeb6e {
  d: path("M8 3V7M16 3V7");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="e1i4hn8sv"/><path class="ypi7oeb6e"/></g>`,
		"fallback": "keyline-icons:calendar-fill",
	});
}

export default Component;
