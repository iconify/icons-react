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

.p7hqkpd4z {
  d: path("M2.5 10.5a9.5 6.5 0 1 0 19 0a9.5 6.5 0 1 0-19 0");
}

.uq18gqbff {
  d: path("M2.5 10.5v3a9.5 6.5 0 0 0 19 0v-3m-16 0h13M12 7v7");
}
</style><g class="hntgybcog"><path class="p7hqkpd4z"/><path class="uq18gqbff"/></g>`,
		"fallback": "uix:bodhran",
	});
}

export default Component;
