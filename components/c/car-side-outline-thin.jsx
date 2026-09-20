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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s9s5yjv8n {
  d: path("M12 5v11");
}

.sqwju3bsh {
  d: path("M2 16V8.5h4L9.5 5h5L18 8.5h4V16Z");
}
</style><g class="hntgybcog"><path class="sqwju3bsh"/><path class="du3agkbjb"/><path class="fquh7rbnp"/><path class="s9s5yjv8n"/></g>`,
		"fallback": "iconmind:car-side-outline-thin",
	});
}

export default Component;
