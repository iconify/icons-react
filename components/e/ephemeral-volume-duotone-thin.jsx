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
		"content": `<style>.c2-gs7b7d {
  d: path("m15 9 -3 3h2.5l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oto6z4zwr {
  d: path("M4 6a8 3 0 0 1 16 0v12a8 3 0 0 1 -16 0Z");
}

.xugsw1b4j {
  fill: currentColor;
  d: path("M4 6a8 3 0 0 1 16 0v12a8 3 0 0 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xugsw1b4j"/><path class="oto6z4zwr"/><path class="c2-gs7b7d"/></g>`,
		"fallback": "iconmind:ephemeral-volume-duotone-thin",
	});
}

export default Component;
