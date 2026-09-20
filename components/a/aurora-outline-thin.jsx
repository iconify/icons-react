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

.i67oc1bla {
  d: path("M5 16V8l4 -4");
}

.mkk0o-9le {
  d: path("M15 16V8l4 -4");
}

.nzhcuvf_z {
  d: path("M10 16V8l4 -4");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="i67oc1bla"/><path class="nzhcuvf_z"/><path class="mkk0o-9le"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:aurora-outline-thin",
	});
}

export default Component;
