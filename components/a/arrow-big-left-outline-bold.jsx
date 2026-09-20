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
		"content": `<style>.e0y3ylfvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("m3 12 9 -9v5h9v8h-9v5Z");
}
</style><path class="e0y3ylfvy"/>`,
		"fallback": "iconmind:arrow-big-left-outline-bold",
	});
}

export default Component;
