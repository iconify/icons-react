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
		"content": `<style>.cbvfl-_0s {
  d: path("M6 9v4h15");
}

.f0zlw3bmh {
  d: path("M10 15v4h11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="cbvfl-_0s"/><path class="f0zlw3bmh"/></g>`,
		"fallback": "iconmind:drilldown-outline-thin",
	});
}

export default Component;
