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
		"content": `<style>.hkw7nzbsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.6V5a2 2 0 0 1 4 0v9.6a3.25 3.25 0 1 1-4 0m11.75-7.1v9m3.9-6.75l-7.8 4.5m7.8 0l-7.8-4.5m4.55.35l-.65-.89l-.65.89m2.62 1.51l.45-1l-1.1-.12m0 3.02l1.1-.12l-.45-1M16.1 13.9l.65.89l.65-.89m-2.62-1.51l-.45 1.01l1.1.11m0-3.02l-1.1.12l.45 1");
}
</style><path class="hkw7nzbsl"/>`,
		"fallback": "iconoven:cold-wave",
	});
}

export default Component;
