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

.iwoy52b7h {
  d: path("M3 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
}

.um6qav7po {
  d: path("M2 11a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.xbz5-ab-d {
  d: path("M11.5 11a2 2 0 0 1 2 -2H16a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="iwoy52b7h"/><path class="um6qav7po"/><path class="xbz5-ab-d"/></g>`,
		"fallback": "iconmind:catalog-outline-thin",
	});
}

export default Component;
