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
		"content": `<style>.b7uyqxwtl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ggqz7qkuq {
  d: path("m9 15 2 -2 2 2 2 -2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.ye-b14n6a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 15 2 -2 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="b7uyqxwtl"/><path class="ye-b14n6a"/><path class="ky4omnbla"/><path class="ggqz7qkuq"/></g>`,
		"fallback": "iconmind:earnings-report-duotone-thin",
	});
}

export default Component;
