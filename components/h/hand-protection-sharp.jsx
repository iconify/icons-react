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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.skp5lridd {
  d: path("M9.25 17.75V14.5l-1.5-1.75l-2.068-4.007L9.25 11.5l.5.5V7.5h2.5v1.25v-2h2.5v2V7.5h2.5v9L16 17.75Zm0-2.5H17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="skp5lridd"/></g>`,
		"fallback": "iconoven:hand-protection-sharp",
	});
}

export default Component;
