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
		"content": `<style>.bih55pzif {
  d: path("M11 3a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.bkiaatbvd {
  d: path("M5 5h14v4H5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.n75imzbwr {
  d: path("M5 12h14v4H5Z");
}
</style><g class="hntgybcog"><path class="bkiaatbvd"/><path class="n75imzbwr"/><path class="jkuojibnm"/><path class="bih55pzif"/></g>`,
		"fallback": "iconmind:beekeeping-outline-thin",
	});
}

export default Component;
