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
		"content": `<style>.e1i8cybef {
  fill: currentColor;
  d: path("M3 8v12h14V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jkajs8zlu {
  d: path("M13 8V4h4v4");
}

.jxalr7p_q {
  d: path("M3 8v12h14V8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e1i8cybef"/><path class="jxalr7p_q"/><path class="jkajs8zlu"/></g>`,
		"fallback": "iconmind:chopping-board-duotone-regular",
	});
}

export default Component;
