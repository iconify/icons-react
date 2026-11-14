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
		"content": `<style>.czeiw6b4w {
  d: path("M22 22H2");
}

.dcdg70bfs {
  d: path("M5 22V6C5 4.1144 5 3.1716 5.5858 2.5858C6.1716 2 7.1144 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.5858C19 3.1716 19 4.1144 19 6V22");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k04pfvyug {
  d: path("M15.5 12.5H15.5001");
}
</style><g class="hntgybcog"><path class="czeiw6b4w"/><path class="dcdg70bfs"/><path class="k04pfvyug"/></g>`,
		"fallback": "solar:door-closed-linear",
	});
}

export default Component;
