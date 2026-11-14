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

.lyvriwg2w {
  d: path("M3.5 10.5v3a8.5 6 0 0 0 17 0v-3m-11-3h5m-4 0v6m3-6v6m-4 0h5");
}

.osodpqbvn {
  d: path("M3.5 10.5a8.5 6 0 1 0 17 0a8.5 6 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="osodpqbvn"/><path class="lyvriwg2w"/></g>`,
		"fallback": "uix:ancient-coin",
	});
}

export default Component;
