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

.oiqkce4vb {
  d: path("M13 5h6v4h-6Z");
}

.rmcfrrb-t {
  d: path("M6 3v12c0 3 2 4 5 4h6");
}
</style><g class="hntgybcog"><path class="rmcfrrb-t"/><path class="oiqkce4vb"/></g>`,
		"fallback": "iconmind:ice-hockey-outline-thin",
	});
}

export default Component;
