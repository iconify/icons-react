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
		"content": `<style>.gt34gfyor {
  d: path("M8.5 10.25a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0M3.5 14c.9 1 1.9 1 2.75 0c.75 1.75 2.25 1.75 3 0c.9 1 2.4 1 3.25 0c.75 1.75 2.25 1.75 3 0c.9 1 1.9 1 2.75 0m-12-4l1-.5m1-2L9 8m6.75-.5L15 8m2 1.75l.75.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwktpqbzq {
  d: path("M3.25 11c0-3 3.9-5.25 8.75-5.25S20.75 8 20.75 11v2.5c0 3-3.9 5.25-8.75 5.25S3.25 16.5 3.25 13.5Z");
}
</style><g class="hntgybcog"><path class="zwktpqbzq"/><path class="gt34gfyor"/></g>`,
		"fallback": "iconoven:donut-sprinkle",
	});
}

export default Component;
